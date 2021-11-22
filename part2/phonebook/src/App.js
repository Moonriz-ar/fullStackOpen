import React, { useState } from "react";
import Form from "./components/Form.js";
import Phonebook from "./components/Phonebook.js";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name: newName,
    };

    setPersons([...persons, newContact]);
    setNewName("");
  };

  return (
    <>
      <Form
        newName={newName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Phonebook persons={persons} />
    </>
  );
};

export default App;