import React from "react";

const Country = ({ country }) => {
  console.log(country);
  const countryName = country.name.common;
  const languageArray = Object.values(country.languages);
  return (
    <div className="card border border-primary-content h-fit p-4">
      <h3 className="mb-4">{countryName}</h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <h4 className="mt-4">Languages:</h4>
      <ul>
        {languageArray.map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
      <div className="mt-4">
        <img className="h-[8rem]" src={country.flags.png} alt="" />
      </div>
    </div>
  );
};

export default Country;
