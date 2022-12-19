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
  console.log("render", countries.length, "countries");
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
