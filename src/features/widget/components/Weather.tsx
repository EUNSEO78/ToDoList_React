import { useEffect, useState } from "react";

const Weather = () => {
  const [img, setImg] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((v) => {
      const { latitude, longitude } = v.coords;
      const apikey = "49d326729db59a0224f9acbc6be4ce6c";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
      )
        .then((response) => response.json())
        .then((v) => {
          setImg((prev) => {
            const weatherIcon = v.weather[0].icon;
            return `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
          });
          setTemp((prev) => Math.round((v.main.temp - 273.15) * 10) / 10);
          setLocation((prev) => v.name);
        });
    });
  }, []);

  return (
    <div className="w-[800px] bg-myWeatherWidgetBg py-8 rounded-md text-3xl font-extrabold text-white flex justify-center g-5">
      <h1 className=" h-fit border-b-2 border-white border-solid ">
        ❅ Weather ❅
      </h1>
      <div className="flex gap-2.5 justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-5 ">
          <span>{location}</span>
          <span className="text-[60px]">{temp}°C</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
