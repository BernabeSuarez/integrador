import React from "react";
import styled from "styled-components";
import { GrClose, GrMenu, GrUserManager } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: white;
  padding-left: 1%;
  padding-right: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuContainer = styled.div`
  width: 10%;
`;
const LoginContainer = styled.div`
  width: 10%;
  display: flex;
  cursor: pointer;
`;
const LoginTitle = styled.h3`
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
    display: none;
  }
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
