import React from "react";
import { ButtonStyle } from "./ButtonStyle";
const Button = ({ onClick, children }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
