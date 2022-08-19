import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MenuNavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 70px;
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  backdrop-filter: blur(1px);
  z-index: 999;
`;
const MenuNav = styled.div`
  width: 300px;
  height: 100vh;
  background-color: antiquewhite;
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
