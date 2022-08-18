import styled from "styled-components";
import {
  colorPageWhite,
  colorPageBlack
} from "../../styles/utilities/colors";

export const ButtonStyle = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin: 2%;
  background-color: ${colorPageBlack};
  color: ${colorPageWhite};
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${colorPageWhite};
    color: ${colorPageBlack};
    border: 1px solid ${colorPageBlack};
  }
`;