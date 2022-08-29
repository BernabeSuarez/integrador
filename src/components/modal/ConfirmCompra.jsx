import React from "react";
import {
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  DialogShadow,
} from "./ModalElements";

const ConfirmCompraContainer = () => {
  return (
    <DialogShadow>
      <Dialog>
        <DialogBanner>
          <DialogBannerName></DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <p>Gracias por tu compra</p>
        </DialogContent>
      </Dialog>
    </DialogShadow>
  );
};

export const ConfirmCompra = (props) => {
  if (!props.show) return null;
  return <ConfirmCompraContainer {...props} />;
};
