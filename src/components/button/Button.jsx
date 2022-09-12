import React from "react";
import { ButtonStyle } from "./ButtonStyle";
const Button = ({ onClick, children, disabled }) => {
  return (
    <ButtonStyle disabled={disabled} type="button" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
