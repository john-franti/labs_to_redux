import React from "react";
import Student from "./Student";

const Lab = (props) => {
  const renderStudents = () => {
    return props.lab.students.map((student, index) => {
      return <Student key={index} student={student}/>;
    });
  };

  return (
    <ul>
      <li>{props.lab.labName}</li>
      <ul>{renderStudents()}</ul>
    </ul>
  );
};

export default Lab;
