import { useEffect, useState } from "react";
import "../styles/Weather.css";

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
    <div className="weatherContainer">
      <h1>❅ Weather ❅</h1>
      <div className="weatherContents">
        <div className="img_box">
          <img className="img" src={img} alt="" />
        </div>
        <div className="weatherInfo_box">
          <span className="location">{location}</span>
          <span className="temp">{temp}°C</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
