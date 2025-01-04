import React, { useEffect, useState } from "react";
import axios from "axios";


interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const apiKey = "your-api-key";
  const city = "Reykjavik";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  useEffect(() => {

    axios
      .get<WeatherData>(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch weather data.");
        setIsLoading(false);
      });
  }, []);


  const getWeatherImage = (icon: string) => {
    const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
    return iconUrl;
  };


  if (isLoading) {
    return <div>Loading weather data...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="weather-container" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather in Reykjavík</h1>
      <h2>{weatherData?.main.temp}°C</h2>
      <h3>{weatherData?.weather[0].description}</h3>
      <img
        src={getWeatherImage(weatherData?.weather[0].icon ?? "")}
        alt={weatherData?.weather[0].description}
        style={{ width: "100px", height: "100px" }}
      />
      <div>
        <p>Humidity: {weatherData?.main.humidity}%</p>
      </div>
    </div>
  );
};

export default Weather;
