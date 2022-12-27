import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  // display loading screen while fetching weather data
  const [isLoaded, setIsLoaded] = useState(false);
  // current temperature
  const [temperature, setTemperature] = useState("");
  // weather description and icon
  const [weather, setWeather] = useState({
    description: "",
    icon: "",
  });

  // api key
  const api_key = process.env.REACT_APP_API_KEY;
  // Open weather url
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=${capital}&units=metric`;
  // fetch data from openweathermap
  useEffect(() => {
    console.log("Fetching weather data");
    axios
      .get(url)
      .then((response) => {
        const weatherData = response.data;
        console.log(weatherData);
        setIsLoaded(true);
        setTemperature(weatherData.main.temp);
        setWeather({
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
        });
      })
      .catch((error) => {
        setIsLoaded(true);
        console.log(error);
      });
  }, []);
  // Loading screen
  if (!isLoaded) {
    return (
      <section className="flex flex-col items-center justify-center w-screen h-screen">
        <p>Weather information is loading. . .</p>
        <div className="w-[6rem] h-[6rem] border-[5px] border-solid    rounded-full border-transparent border-y-accent animate-spin mt-4"></div>
      </section>
    );
  } else
    return (
      <div>
        <h3>
          Weather in{" "}
          <span className="font-extrabold tracking-wider">{capital}</span>
        </h3>
        <p>
          Temperature: <span className="font-bold text-lg">{temperature} </span>
          &deg; Celsius
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=""
        />
        <p className="capitalize">{weather.description}</p>
      </div>
    );
};

export default Weather;
