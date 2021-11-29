import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import CountriesInfo from "./components/CountriesInfo";

function App() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    console.log("effect");
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
      <CountriesInfo countries={countries} />
    </>
  );
}

export default App;
