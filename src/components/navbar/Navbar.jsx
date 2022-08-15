import React from "react";
import styled from "styled-components";
import { GrClose, GrMenu, GrUserManager } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import { colorPageDarkBlue } from "../../styles/utilities/colors";

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: #fafafa;
  padding-left: 1%;
  padding-right: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const LoginContainer = styled.div`
  width: 10%;
  display: flex;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const LoginTitle = styled.h3`
  margin-left: 5%;
  color: ${colorPageDarkBlue};
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  margin: 2% 0 2%;
`;

const Navbar = () => {
  const hidden = useSelector((state) => state.root.menu.hidden);
  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenuHidden());
  };
  return (
    <NavbarContainer>
      <MenuContainer>
        {!hidden && (
          <GrMenu style={{ fontSize: "1.2rem" }} onClick={handdlerToggle} />
        )}
        {hidden && (
          <GrClose style={{ fontSize: "1.2rem" }} onClick={handdlerToggle} />
        )}
        <LogoContainer>
          <img src="img/logoTienda.png" alt="Logo tienda" width={"200px"} />
        </LogoContainer>
      </MenuContainer>

      <LoginContainer>
        <GrUserManager
          style={{
            fontSize: "1.2rem",
          }}
        />
        <LoginTitle>Ingresar</LoginTitle>
      </LoginContainer>
    </NavbarContainer>
  );
};

export default Navbar;