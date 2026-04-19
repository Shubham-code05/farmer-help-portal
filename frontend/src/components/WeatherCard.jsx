import { useEffect, useState } from "react";
import axios from "axios";

function WeatherCard() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const cityValue = "Gorakhpur";
        const apiKey = "f6251cd3499fac55e20f35c783954d14";

        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        );

        setWeather(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#e8f5e9",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>🌦 Weather</h2>

      {weather ? (
        <>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherCard;