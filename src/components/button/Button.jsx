import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin: 2%;
  background-color: #000;
  color: white;
  border-radius: 5px;
  &:hover {
    background-color: #fafafa;
    color: #000;
    border: 1px solid #000;
  }
`;
const Button = ({ onClick, children }) => {
  return (
    <ButtonStyle type="button" onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
