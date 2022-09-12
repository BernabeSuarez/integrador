import styled from "styled-components";
import {
  colorPageWhite,
  colorPageBlack
} from "../../styles/utilities/colors";

export const ButtonStyle = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin: 2%;
  font-family:"WorkSans";
  font-size:1.1rem;
  background-color: ${colorPageBlack};
  color: antiquewhite;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${colorPageWhite};
    color: ${colorPageBlack};
    border: 1px solid ${colorPageBlack};
  }

   ${(
  { disabled } //Colorea el input si existe un error
) =>
    disabled
      ? `
          color: #7e8083;
          background: linear-gradient(to right top, #7e8083, #92989a, #a8b1b0, #c1c9c4, #dfe1d8);
          &:hover {
            border: 2px solid red;
            color: red;
          }
        `
      : null}
`;