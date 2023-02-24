import React from "react";
import "./input.css";

const Input = (props) => {
  const { variant = "medium", ...rest } = props;
  return (
    <>
      <input type="text" className={`input ${variant}`} {...rest} />
    </>
  );
};

export default Input;
