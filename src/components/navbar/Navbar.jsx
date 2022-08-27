import React from "react";
import { IoMenu, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { TbUserCircle, TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import * as cartActions from "../../redux/carro/cart-actions";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import {
  NavbarContainer,
  MenuContainer,
  LoginContainer,
  LoginTitle,
  LogoContainer,
  LinksContainer,
  CartIconContainer,
  ItemCount,
  UserContainer,
} from "./NavbarElements";

const Navbar = () => {
  const fontStyles = { color: "white", fontSize: "1.5rem" };

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
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Se ha cerrado sesion"); // accion al cerrar sesion
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const user = auth.currentUser;

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
          <TbUserCircle style={fontStyles} />
          {user ? (
            <UserContainer>
              <LoginTitle>{user.displayName}</LoginTitle>
              <TbLogout style={fontStyles} onClick={SignOut} />
            </UserContainer>
          ) : (
            <Link to="login">
              <LoginTitle>Ingresar</LoginTitle>
            </Link>
          )}
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
