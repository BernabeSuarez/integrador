import React from "react";
import { GrClose, GrMenu, GrUserManager, GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import * as cartActions from "../../redux/carro/cart-actions";
import {
  NavbarContainer,
  MenuContainer,
  LoginContainer,
  LoginTitle,
  LogoContainer,
  LinksContainer,
} from "./NavbarElements";

const Navbar = () => {
  const hidden = useSelector((state) => state.root.menu.hidden);

  const dispatch = useDispatch();
  const handdlerToggle = () => {
    dispatch(menuActions.toggleMenuHidden());
  };
  const cartToggle = () => {
    dispatch(cartActions.toggleCartHidden());
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
      <LinksContainer>
        <LoginContainer>
          <GrUserManager
            style={{
              fontSize: "1.2rem",
            }}
          />
          <LoginTitle>Ingresar</LoginTitle>
        </LoginContainer>
        <GrCart
          style={{ width: "20%", fontSize: " 1.2rem", cursor: "pointer" }}
          onClick={cartToggle}
        />
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
