import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import {
  CarroContent,
  CarroContainer,
  CarroItem,
  ItemImg,
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
            {cartItems.map((item) => (
              <CarroContent>
                <CarroContainer>
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
                </CarroContainer>
              </CarroContent>
            ))}
            <ConfirmButton>Pagar</ConfirmButton>
          </CarroContent>
        )}
      </CarroContent>
    </>
  );
};

export default CartItems;
