import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import {
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  ConfirmButton,
  DialogShadow,
} from "./ModalElements";

const ModalContainer = ({ openProduct, setOpenProduct }) => {
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
          <ConfirmButton>
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
