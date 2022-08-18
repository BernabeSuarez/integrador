import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colorPageWhite } from "../../styles/utilities/colors";

const MenuNavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100% - 70px);
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  backdrop-filter: blur(1px);
  z-index: 999;
`;
const MenuNav = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${colorPageWhite};
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(-100%)`)};
  transition-property: transform;
  transition-duration: 0.8s;
  z-index: 150;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavbarMenu = () => {
  const hidden = useSelector((state) => state.root.menu.hidden);
  return (
    <MenuNavContainer show={hidden}>
      <MenuNav show={hidden}>Hola</MenuNav>
    </MenuNavContainer>
  );
};

export default NavbarMenu;
