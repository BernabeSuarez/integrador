import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/carro/cart-actions";

import {
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  ConfirmButton,
  DialogShadow,
} from "./ModalElements";

const ModalContainer = ({ openProduct, setOpenProduct }) => {
  const dispatch = useDispatch();

  const AddCart = () => {
    dispatch(cartActions.addItem(openProduct));
    setOpenProduct();
  };

  const HandlerClose = () => {
    setOpenProduct();
  };

  return (
    <DialogShadow onClick={HandlerClose}>
      <Dialog>
        <DialogBanner img={openProduct.img}>
          <DialogBannerName>{openProduct.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <p>{openProduct.name}</p>
          <ConfirmButton onClick={AddCart}>
            Agregar: {formatPrice(openProduct.price)}
          </ConfirmButton>
        </DialogContent>
      </Dialog>
    </DialogShadow>
  );
};

export const Modal = (props) => {
  if (!props.openProduct) return null;
  return <ModalContainer {...props} />;
};
