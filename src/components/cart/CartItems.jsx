import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import {
  CarroContent,
  CarroContainer,
  CarroItem,
  ItemImg,
  CartFooter,
  CartProducts,
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
          <CarroContent>Aun no has comprado nada...</CarroContent>
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
