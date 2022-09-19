import React from "react";
import { IoMenu, IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { TbUserCircle, TbUserCheck } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import * as menuActions from "../../redux/menu/menuActions";
import * as cartActions from "../../redux/carro/cart-actions";
import * as userActions from "../../redux/user/user-actions";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
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
  const fontStylesCheck = { color: "lightGreen", fontSize: "1.5rem" };
  const currentUser = useSelector((state) => state.root.user.currentUser);
  const user = currentUser;
  const hidden = useSelector((state) => state.root.menu.hidden);
  const quantity = useSelector((state) =>
    state.root.cart.cartItems.reduce(
      (previousValue, cartItem) => previousValue + cartItem.quantity,
      0
    )
  );

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
              <TbUserCheck style={fontStylesCheck} />
              <LoginTitle>{currentUser}</LoginTitle>
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
