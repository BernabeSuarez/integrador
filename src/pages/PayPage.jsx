import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";
import { useSelector } from "react-redux";
import { CarroItem } from "../components/cart/CartItemsElements";
import Button from "../components/button/Button";
import CreditCard from "../components/creditCard/CreditCard";
import { Input } from "../components/UI/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as cartActions from "../redux/carro/cart-actions";
import { useModal } from "../hooks/useModal";
import { ConfirmCompra } from "../components/modal/ConfirmCompra";

const PayContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PayItemsContainer = styled.div`
  width: 60%;
  height: 80vh;
  margin-top: 40px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  & form {
    min-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    & input {
      width: 100%;
    }
    & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    & button {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    & input {
      width: 90%;
    }
  }
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
  @media (max-width: 768px) {
    width: 100%;
  }
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);
  const [isOpen, openDialog, closeDialog] = useModal(false); // abre y cierra el modal

  const finallyBuy = () => {
    openDialog();
    setTimeout(() => {
      closeDialog();
      dispatch(cartActions.cleanCart());
      navigate("/home");
    }, 3500);
  };

  const [numero, setNumero] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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
    <>
      <ConfirmCompra show={isOpen} />
      <PayContainer>
        <PayItemsContainer>
          <CreditCard>
            <h2>{numero}</h2>
            <div
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <h3>{name}</h3>
              <h3 style={{ width: "30%" }}>{date}</h3>
            </div>
          </CreditCard>
          <form>
            <label htmlFor="numero">Numero</label>
            <Input
              id="number"
              type="number"
              name="numero"
              placeholder="Numero de la Tarjeta"
              onChange={(e) => setNumero(e.target.value)}
            />
            <label htmlFor="name">Nombre y apellido</label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="date">Valido Hasta</label>
            <Input
              id="date"
              type="text"
              name="date"
              placeholder="Valido Hasta"
              onChange={(e) => setDate(e.target.value)}
            />
            <Button
              onClick={() => {
                setDisable(false);
              }}
            >
              Aceptar
            </Button>
          </form>
        </PayItemsContainer>
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
          <Button disabled={disable} onClick={finallyBuy}>
            Pagar
          </Button>
        </CartItemsContainer>
      </PayContainer>
    </>
  );
};

export default PayPage;
