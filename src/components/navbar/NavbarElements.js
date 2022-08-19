import { colorPageBlack, colorPageGray } from "../../styles/utilities/colors";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
 position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${colorPageBlack};
  padding-left: 2%;
  padding-right: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:999;
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
  margin-left: 1%;
  margin-right: 10%;
  color: #fafafa;
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

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const ItemCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: ${colorPageGray};
  font-size: 10px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;