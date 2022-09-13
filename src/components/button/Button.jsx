import React from "react";
import { ButtonStyle } from "./ButtonStyle";
const Button = ({ onClick, children, disabled, type }) => {
  return (
    <ButtonStyle disabled={disabled} type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
