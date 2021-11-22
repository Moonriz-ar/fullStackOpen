import React from "react";
import Contact from "./Contact";

function Phonebook({ persons }) {
  return (
    <>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map((person) => (
            <Contact name={person.name} phone={person.phone} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Phonebook;
