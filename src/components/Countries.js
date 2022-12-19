import { useState } from "react";
import Country from "./Country";

const Countries = ({ query, countries, isLoaded, error }) => {
  // toggle country information when user click on the card
  const [show, setShow] = useState(false);
  // set country to show when use click on a card
  const [showCountry, setShowCountry] = useState({});
  // filter countries by user's input
  const filteredCountries = countries.filter((country) => {
    if (query === "") {
      return country;
    } else return country.name.common.toLowerCase().includes(query);
  });
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <section className="flex items-center justify-center w-screen h-screen">
        <div className="w-[6rem] h-[6rem] border-[5px] border-solid    rounded-full border-transparent border-y-primary animate-spin"></div>
      </section>
    );
  }
  // display in cards
  else
    return (
      <div className="w-full">
        {show ? (
          <Country country={showCountry} />
        ) : filteredCountries.length === 1 ? (
          <>
            {filteredCountries.map((country) => {
              return <Country key={country.ccn3} country={country} />;
            })}
          </>
        ) : filteredCountries.length > 8 ? (
          <p>Too many matches, specify another filter</p>
        ) : (
          <ul className="flex flex-wrap gap-6">
            {filteredCountries.map((country) => {
              const flag = country.flags.png;
              const countryName = country.name.common;
              return (
                <li key={country.ccn3}>
                  <button
                    onClick={() => {
                      console.log(country);
                      setShowCountry(country);
                      setShow(!show);
                    }}
                    className="card card-compact w-[16rem] bg-base-100 shadow-xl hover:scale-110 cursor-pointer transition-all ease-in-out duration-200"
                  >
                    <figure className="h-[8rem]">
                      <img src={flag} alt={countryName} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{countryName}</h2>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
};

export default Countries;
