import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "../components/Countries";

const TheApp = () => {
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState();

  // fetch countries from https://restcountries.com/v3.1/all
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    console.log("Effect");
    axios.get(url).then((response) => {
      console.log("Promise Fulfilled");
      setCountries(response.data);
    });
  }, []);
  console.log("render", countries.length, "countries");
  // handle country input
  const handleSearch = (event) => {
    console.log(event.target.value);
    let lowerCase = event.target.value.toLowerCase();
    setSearch(lowerCase);
  };
  return (
    <div>
      <h2>Search Countries</h2>
      {/* country user input */}
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs mt-8"
        value={search}
        onChange={handleSearch}
      />
      {/* results */}
      <Countries />
    </div>
  );
};

export default TheApp;
