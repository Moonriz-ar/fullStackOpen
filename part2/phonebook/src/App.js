import React, { useEffect, useState } from "react";
import axios from "axios";

import Filter from "./components/Filter.js";
import Form from "./components/Form.js";
import Phonebook from "./components/Phonebook.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  const handleChange = (event) => {
    let inputName = event.target.name;
    let newValue = event.target.value;

    switch (inputName) {
      case "name":
        setNewName(newValue);
        break;
      case "phone":
        setNewPhone(newValue);
        break;
      case "filter":
        setFilter(newValue);
        break;
      default:
        alert("error in form");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    if (persons.find((person) => person.name === newContact.name)) {
      alert(`${newContact.name} is already added to phonebook`);
      return false;
    }

    setPersons([...persons, newContact]);
    setNewName("");
    setNewPhone("");
  };

  return (
    <>
      <Filter newFilter={newFilter} handleChange={handleChange} />
      <Form
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Phonebook persons={persons} newFilter={newFilter} />
    </>
  );
};

export default App;
