import React, { useState } from "react";
import Form from "./components/Form.js";
import Phonebook from "./components/Phonebook.js";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "1551010481" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleChange = (event) => {
    let inputName = event.target.name;
    let newValue = event.target.value;

    if (inputName === "name") {
      setNewName(newValue);
    } else if (inputName === "phone") {
      setNewPhone(newValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
      phone: newPhone,
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
      <Form
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Phonebook persons={persons} />
    </>
  );
};

export default App;
