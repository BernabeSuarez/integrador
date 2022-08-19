import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { CarroContent, CarroContainer, CarroItem } from "./CartItemsElements";

const CartItems = ({ compra }) => {
  return (
    <>
      <CarroContent>
        {compra.map((compra) => (
          <CarroContent>
            <CarroContainer>
              <CarroContainer>
                <CarroItem>
                  <div>1</div>
                  <div>{compra.name}</div>
                  <div>{formatPrice(compra.price)}</div>
                </CarroItem>
              </CarroContainer>
            </CarroContainer>
          </CarroContent>
        ))}
      </CarroContent>
    </>
  );
};

export default CartItems;
