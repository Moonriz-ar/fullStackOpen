import React, { useEffect, useState } from "react";

function CountryDetail({ country }) {
  console.log(country);
  const [capital, setCapital] = useState("");
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    console.log("weather effect");

    if (country.hasOwnProperty("capital")) {
      setCapital(country.capital[0].replace(/ /g, "+"));
    }

    console.log(capital);
    console.log(api_key);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setWeather(json);
      });
  }, [country, capital, api_key]);

  return (
    <>
      <h2>{country.name.common}</h2>
      {country.hasOwnProperty("capital") && <p>capital {country.capital[0]}</p>}
      <p>population {country.population}</p>

      <h3>Spoken languages</h3>
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
