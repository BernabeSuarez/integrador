import React from "react";
import { IoMenu, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
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
  CartIconContainer,
  ItemCount,
} from "./NavbarElements";

const Navbar = () => {
  const fontStyles = { color: "white", fontSize: "1.4rem" };

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
        {!hidden && <IoMenu style={fontStyles} onClick={handdlerToggle} />}
        {hidden && (
          <IoCloseOutline style={fontStyles} onClick={handdlerToggle} />
        )}
        <LogoContainer>
          <img src="img/logoTienda.png" alt="Logo tienda" width={"200px"} />
        </LogoContainer>
      </MenuContainer>
      <LinksContainer>
        <LoginContainer>
          <MdOutlinePersonOutline style={fontStyles} />
          <LoginTitle>Ingresar</LoginTitle>
        </LoginContainer>
        <CartIconContainer>
          <IoCartOutline style={fontStyles} onClick={cartToggle} />

          <ItemCount>0</ItemCount>
        </CartIconContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
