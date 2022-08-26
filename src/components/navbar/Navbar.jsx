import React from "react";
import { IoMenu, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import * as cartActions from "../../redux/carro/cart-actions";
import { Link } from "react-router-dom";
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
  const quantity = useSelector((state) =>
    state.root.cart.cartItems.reduce(
      (previousValue, cartItem) => previousValue + cartItem.quantity,
      0
    )
  );

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
          <Link to="home">
            <img src="img/logoTienda.png" alt="Logo tienda" width={"200px"} />
          </Link>
        </LogoContainer>
      </MenuContainer>
      <LinksContainer>
        <LoginContainer>
          <MdOutlinePersonOutline style={fontStyles} />
          <Link to="login">
            <LoginTitle>Ingresar</LoginTitle>
          </Link>
        </LoginContainer>

        <CartIconContainer>
          <IoCartOutline style={fontStyles} onClick={cartToggle} />

          <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
