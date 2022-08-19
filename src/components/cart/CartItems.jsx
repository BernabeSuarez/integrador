import React from "react";
import { formatPrice } from "../../utils/formatPrice";
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
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.root.cart.cartItems);
  return (
    <>
      <CarroContent>
        {cartItems.length === 0 ? (
          <EmptyCart>
            <img src="img/Empty-cart.png" alt="" style={{ width: "180px" }} />
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
              <ConfirmButton>Pagar</ConfirmButton>
            </CartFooter>
          </CarroContent>
        )}
      </CarroContent>
    </>
  );
};

export default CartItems;
