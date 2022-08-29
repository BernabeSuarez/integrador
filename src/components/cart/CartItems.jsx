import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import Empty from "../../assets/Empty-cart.PNG";
import {
  CarroContent,
  CarroContainer,
  CarroItem,
  ItemImg,
  CartFooter,
  CartProducts,
  EmptyCart,
} from "./CartItemsElements";
import { ConfirmButton } from "../modal/ModalElements";
import { QuantityManage } from "./QuantitySection";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as cartActions from "../../redux/carro/cart-actions";

const CartItems = () => {
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  const navigate = useNavigate();
  const Pagar = () => {
    navigate("/payPage");
    closeCart();
  };
  const totalItems = useSelector((state) =>
    state.root.cart.cartItems.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    )
  );
  const cartItems = useSelector((state) => state.root.cart.cartItems);
  return (
    <>
      <CarroContent>
        {cartItems.length === 0 ? (
          <EmptyCart>
            <img src={Empty} alt="" style={{ width: "180px" }} />
            <h5>Nada por aqui...</h5>
          </EmptyCart>
        ) : (
          <CarroContent>
            <CartProducts>
              <CarroContent>
                {cartItems.map((item) => (
                  <CarroContent>
                    <CarroContainer>
                      <CarroItem>
                        <ItemImg img={item.img} />
                        <div>
                          <div>{item.name}</div>
                          <div>{formatPrice(item.price)}</div>
                        </div>
                        <div>
                          <QuantityManage item={item} />
                        </div>
                      </CarroItem>
                    </CarroContainer>
                  </CarroContent>
                ))}
              </CarroContent>
            </CartProducts>
            <CartFooter>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h4>Total :</h4>
                <h4>{formatPrice(totalItems)}</h4>
              </div>
              <ConfirmButton onClick={Pagar}>Confirmar Compra</ConfirmButton>
            </CartFooter>
          </CarroContent>
        )}
      </CarroContent>
    </>
  );
};

export default CartItems;
