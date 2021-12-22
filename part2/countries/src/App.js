import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import CountriesInfo from "./components/CountriesInfo";
require("dotenv").config();

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setQuery(event.target.id);
  };

  // fetch country info
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${query}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCountries(json);
      });
  }, [query]);

  return (
    <>
      <Form query={query} handleChange={handleChange} />
      <CountriesInfo countries={countries} handleClick={handleClick} />
    </>
  );
}

export default App;
