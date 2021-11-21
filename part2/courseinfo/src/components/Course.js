import React from "react";
import Header from "./Header.js";
import Content from "./Content.js";

function Course({ course }) {
  return (
    <>
      <Header header={course.name} />
      <Content course={course} />
    </>
  );
}

export default Course;
