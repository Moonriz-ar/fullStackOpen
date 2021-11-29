import React from "react";

function Form({ query, handleChange }) {
  return (
    <>
      <form>
        <label>
          find countries
          <input
            type="text"
            name="countries"
            value={query}
            onChange={handleChange}
          />
        </label>
      </form>
    </>
  );
}

export default Form;
