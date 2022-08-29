import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";
import { useSelector } from "react-redux";
import { CarroItem } from "../components/cart/CartItemsElements";
import Button from "../components/button/Button";

const PayContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
`;

const PayItemsontainer = styled.div`
  width: 60%;
  height: 80vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const CartItemsContainer = styled.div`
  width: 35%;
  height: 80vh;
  margin: auto;
  display: flex;
  padding: 0 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartItems = styled(CarroItem)`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  border: none;
`;
const CartItemsTotal = styled(CarroItem)`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
  border-bottom: none;
  border-top: 1px solid black;
`;

const PayPage = () => {
  let envio = 850;
  const cartItems = useSelector((state) => state.root.cart.cartItems);
  const totalItems = useSelector((state) =>
    state.root.cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
  );
  if (totalItems >= 10000 || cartItems.length === 0) {
    envio = 0;
  }

  const TotalPagar = totalItems + envio;

  return (
    <PayContainer>
      <PayItemsontainer></PayItemsontainer>
      <CartItemsContainer>
        <CartItems>
          <h3>Total: </h3>
          <h3>{formatPrice(totalItems)}</h3>
        </CartItems>
        <CartItems>
          <h3>Envio </h3>
          <h3>{formatPrice(envio)}</h3>
        </CartItems>
        <CartItemsTotal>
          <h3>Total A Pagar: </h3>
          <h2>{formatPrice(TotalPagar)}</h2>
        </CartItemsTotal>
        <Button>Pagar</Button>
      </CartItemsContainer>
    </PayContainer>
  );
};

export default PayPage;
