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
`;