import React from "react";
import CountryDetail from "./CountryDetail";

function CountriesInfo({ countries }) {
  const countriesRender = () => {
    if (countries.length === 0) {
      return;
    } else if (countries.length === 1) {
      return <CountryDetail country={countries[0]} />;
    } else if (countries.length >= 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1 && countries.length < 10) {
      return countries.map((country) => (
        <p key={country.cca2}>{country.name.common}</p>
      ));
    }
  };
  return <>{countriesRender()}</>;
}

export default CountriesInfo;
