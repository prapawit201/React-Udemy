import React from "react";

const person = (props) => {
  return (
    <p>
      I'm {props.name} and i'm {props.age} years old and my birthday is{" "}
      {props.birth}{" "}
    </p>
  );
};

export default person;
