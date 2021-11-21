import React from "react";
import Part from "./Part.js";

function Content({ course }) {
  return (
    <>
      {course.parts.map((part) => (
        <Part
          key={part.id}
          id={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </>
  );
}

export default Content;
