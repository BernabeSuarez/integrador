import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import * as cartActions from "../../redux/carro/cart-actions";
import CartItems from "./CartItems";

const CartContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  visibility: ${({ show }) => (show ? `visible` : `hidden`)};
  backdrop-filter: blur(1px);
  z-index: 999;
`;
const CartBody = styled.div`
  width: 350px;
  height: 100%;
  margin-left: calc(100% - 350px);
  padding: 1%;
  background-color: #fafafa;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.8s;
  z-index: 250;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Close = styled(AiOutlineCloseCircle)`
  width: 30px !important;
  height: 30px !important;
  cursor: pointer;
  color: black;
  &:hover {
    color: red;
  }
`;
export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #000;
  & h3 {
    text-align: start;
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
        <CardTitle>
          <h3>Tu Carrito</h3>
          <Close onClick={closeModal} />
        </CardTitle>
        <CartItems />
      </CartBody>
    </CartContainer>
  );
};

export default Cart;
