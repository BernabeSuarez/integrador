import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import { Link } from "react-router-dom";

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
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  background-color: #fffefd;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(-100%)`)};
  transition-property: transform;
  transition-duration: 0.8s;
  box-shadow: 17px 4px 19px 0px rgba(0, 0, 0, 0.52);
  z-index: 150;
  & a {
    font-family: "WorkSalt";
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 8% auto 2%;
    color: black;
  }
  & a:hover {
    color: #f34100;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavbarMenu = () => {
  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenuHidden());
  };
  const hidden = useSelector((state) => state.root.menu.hidden);
  return (
    <MenuNavContainer show={hidden}>
      <MenuNav show={hidden}>
        <Link to="login" onClick={handdlerToggle}>
          Ingresar
        </Link>
        <Link to="catalogo" onClick={handdlerToggle}>
          Catalogo
        </Link>
        <Link to="ofertas" onClick={handdlerToggle}>
          Ofertas
        </Link>
      </MenuNav>
    </MenuNavContainer>
  );
};

export default NavbarMenu;
