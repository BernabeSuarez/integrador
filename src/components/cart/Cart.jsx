import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import * as cartActions from "../../redux/carro/cart-actions";

const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  backdrop-filter: blur(1px);
  z-index: 99;
`;
const CartBody = styled.div`
  width: 500px;
  height: 60vh;
  margin: auto;
  background-color: #fafafa;
  transform: ${({ show }) => (show ? `scale(1)` : `scale(0)`)};
  transition-property: transform;
  transition-duration: 0.8s;
  z-index: 250;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cartHidden = useSelector((state) => state.root.cart.hidden);
  const closeModal = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  return (
    <CartContainer show={cartHidden}>
      <CartBody show={cartHidden}>
        <GrClose
          style={{ fontSize: "2rem", right: "100%" }}
          onClick={closeModal}
        />
      </CartBody>
    </CartContainer>
  );
};

export default Cart;
