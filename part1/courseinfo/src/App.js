import React from "react";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Title = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const Total = () => {
    return (
      <p>
        Number of exercises{" "}
        {parts.reduce((sum, item) => sum + item.exercises, 0)}
      </p>
    );
  };

  return (
    <>
      <Title title={course} />
      {parts.map((part) => {
        return <Part name={part.name} exercises={part.exercises} />;
      })}
      <Total />
    </>
  );
};

export default App;
