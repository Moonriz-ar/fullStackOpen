import React from "react";

function CountryDetail({ country }) {
  console.log(country);
  console.log(Object.values(country.languages));

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <p key={index}>{language}</p>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common}></img>
    </>
  );
}

export default CountryDetail;
