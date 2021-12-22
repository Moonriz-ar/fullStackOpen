/*
import React, { useEffect, useState } from "react";

function WeatherDetail({ country }) {
  useEffect(() => {
    console.log("effect");
    setCapital(
      country.hasOwnProperty("capital") && country.capital[0].replace(/ /g, "+")
    );a
    fetch(`https://restcountries.com/v3.1/name/${capital}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setWeather(json);
      });
  }, [weather, capital, country]);

  return (
    <>
      <h3>
        Weather in {country.hasOwnProperty("capital") && country.capital[0]}
      </h3>
      <p>temperature: </p>
    </>
  );
}

export default WeatherDetail;

*/
