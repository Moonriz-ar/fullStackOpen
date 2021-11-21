import React from "react";
import Part from "./Part.js";
import Total from "./Total.js";

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
      <Total parts={course.parts} />
    </>
  );
}

export default Content;
