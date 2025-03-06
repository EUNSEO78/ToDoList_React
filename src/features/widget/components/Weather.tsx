import { useEffect } from "react";

const Weather = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((v) => {
      const lat = v.coords.latitude;
      const lon = v.coords.longitude;
      const key = "49d326729db59a0224f9acbc6be4ce6c";
      weatherData(lat, lon, key);
    });

    const weatherData = (lat, lon, key) => {
      console.log(lat, lon);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data || data.name || data.wind);
        });
    };
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <span></span>
    </div>
  );
};

export default Weather;
