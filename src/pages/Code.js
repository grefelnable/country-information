import { useEffect } from "react";
import Prism from "prismjs";
import "../prism.css";

const Code = () => {
  // Prismjs
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <h3 className="mb-6">Code I used under the hood</h3>
      <div className="max-w-2xl">
        {/* App.js */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
        >
          <div className="collapse-title text-xl font-medium">
            I used react router dom to have multiple pages across the app
          </div>
          <div className="collapse-content">
            <pre>
              <code className="language-javascript">{`
import { BrowserRouter, Routes, Route } from "react-router-dom";
// rest of imports...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<TheApp />} />
          <Route path="code" element={<Code />} />
          <Route path="repo" element={<Repo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
`}</code>
            </pre>
          </div>
        </div>
        {/* App.js end */}
        {/* Error.js */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
        >
          <div className="collapse-title text-xl font-medium">
            Have an Error page to have a better user experience when
          </div>
          <div className="collapse-content">
            <pre>
              <code className="language-javascript">{`
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold">404</h1>
          <p className="py-6">page not found</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

`}</code>
            </pre>
          </div>
        </div>
        {/* Error.js end */}
        {/* The app */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4"
        >
          <div className="collapse-title text-xl font-medium">
            The app itself and the api for fetching country information
          </div>
          <div className="collapse-content">
            <pre>
              <code className="language-javascript">{`
import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "../components/Countries";

const TheApp = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState();
  const [error, setError] = useState(null);
  // set loading screen
  const [isLoaded, setIsLoaded] = useState(false);

  // fetch countries from https://restcountries.com/v3.1/all
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    console.log("Effect");
    axios
      .get(url)
      .then((response) => {
        console.log("Promise Fulfilled");
        setIsLoaded(true);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  // handle country input
  const handleQuery = (event) => {
    console.log(event.target.value);
    let lowerCase = event.target.value.toLowerCase();
    setQuery(lowerCase);
  };

  return (
    <div>
      {/* country user input */}
      <input
        type="text"
        placeholder="Search for a country..."
        className="input input-bordered input-secondary w-full max-w-xs mt-8 mb-8"
        onChange={handleQuery}
      />
      {/* results */}
      <Countries
        query={query}
        countries={countries}
        error={error}
        isLoaded={isLoaded}
      />
    </div>
  );
};

export default TheApp;
`}</code>
            </pre>
          </div>
        </div>
        {/* The app end */}
        {/* Weather  */}
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How I fetch the weather information using openweathermap.org
          </div>
          <div className="collapse-content">
            <pre>
              <code className="language-javascript">{`
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
  const url = \`http://api.openweathermap.org/data/2.5/weather?appid=\${api_key}&q=\${capital}&units=metric\`;
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
          src={\`http://openweathermap.org/img/wn/\${weather.icon}@2x.png\`}
          alt=""
        />
        <p className="capitalize">{weather.description}</p>
      </div>
    );
};

export default Weather;

`}</code>
            </pre>
          </div>
        </div>
        {/* Weather end */}
      </div>
    </div>
  );
};

export default Code;
