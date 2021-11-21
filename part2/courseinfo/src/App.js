import React from "react";
import Course from "./components/Course.js";

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;

// const App = () => {
//   const course = "Half Stack application development";
//   const parts = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//     },
//   ];

//   const Part = ({ name, exercises }) => {
//     return (
//       <p>
//         {name} {exercises}
//       </p>
//     );
//   };

//   const Total = (props) => {
//     return (
//       <p>
//         Number of exercises{" "}
//         {props.parts.reduce((sum, item) => sum + item.exercises, 0)}
//       </p>
//     );
//   };

//   return (
//     <>
//       <Title title={course} />

//       {parts.map((part) => {
//         return <Part name={part.name} exercises={part.exercises} />;
//       })}

//       <Total parts={parts} />
//     </>
//   );
// };

// export default App;
