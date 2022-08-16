import React from "react";
import { GrClose, GrMenu, GrUserManager } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import {
  NavbarContainer,
  MenuContainer,
  LoginContainer,
  LoginTitle,
  LogoContainer,
} from "./NavbarElements";

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
