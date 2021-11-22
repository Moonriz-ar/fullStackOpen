import React from "react";

function Phonebook({ persons }) {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </>
  );
}

export default Phonebook;
