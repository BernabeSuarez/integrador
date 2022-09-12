import React from "react";
import { IoMenu, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { TbUserCircle, TbLogout, TbUserCheck } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import * as cartActions from "../../redux/carro/cart-actions";
import * as userActions from "../../redux/user/user-actions";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
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
  const currentUser = useSelector((state) => state.root.user.currentUser);
  const user = currentUser;
  const hidden = useSelector((state) => state.root.menu.hidden);
  const quantity = useSelector((state) =>
    state.root.cart.cartItems.reduce(
      (previousValue, cartItem) => previousValue + cartItem.quantity,
      0
    )
  );
  const notify = () =>
    //mensaje que aparece al cerrar la sesion toast
    toast("Se ha cerrado la sesion");

  onAuthStateChanged(auth, (user) => {
    //ver si hay un usuario logueado, renderizar el nombre
    if (user) {
      const uid = user.displayName;
      dispatch(userActions.setCurrentUser(uid));
    } else {
      dispatch(userActions.setCurrentUser(null));
    }
  });

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
        notify();
        // accion al cerrar sesion
      })
      .catch((error) => {
        // An error happened.
      });
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
          <Toaster />
          {user ? (
            <UserContainer>
              <TbUserCheck style={fontStyles} />
              <LoginTitle>{currentUser}</LoginTitle>
              <TbLogout style={fontStyles} onClick={SignOut} />
            </UserContainer>
          ) : (
            <>
              <TbUserCircle style={fontStyles} />
              <Link to="login">
                <LoginTitle>Ingresar</LoginTitle>
              </Link>
            </>
          )}
        </LoginContainer>

        <CartIconContainer onClick={cartToggle}>
          <IoCartOutline style={fontStyles} />

          <ItemCount>{quantity}</ItemCount>
        </CartIconContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
