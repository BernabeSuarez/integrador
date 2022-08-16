import styled from "styled-components";
import {
    colorPageDarkBlue,
    colorPageWhite,
} from "../../styles/utilities/colors";

export const ButtonStyle = styled.button`
  width: 12rem;
  height: 2.5rem;
  margin: 2%;
  background-color: ${colorPageDarkBlue};
  color: ${colorPageWhite};
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: ${colorPageWhite};
    color: ${colorPageDarkBlue};
    border: 1px solid ${colorPageDarkBlue};
  }
`;