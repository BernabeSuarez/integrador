import { colorPageDarkBlue } from "../../styles/utilities/colors";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  padding-left: 1%;
  padding-right: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
export const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content:flex-end;
`;
export const LoginContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content:flex-end;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
export const LoginTitle = styled.h3`
  margin-left: 5%;
  color: ${colorPageDarkBlue};
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const LogoContainer = styled.div`
  margin: 2% 0 2%;
`;