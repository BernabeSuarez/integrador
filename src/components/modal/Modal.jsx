import React from "react";
import { formatPrice } from "../../utils/formatPrice";

import {
  Dialog,
  DialogBanner,
  DialogBannerName,
  DialogContent,
  DialogFooter,
  ConfirmButton,
  DialogShadow,
} from "./ModalElements";

const Modal = () => {
  return (
    <DialogShadow>
      <Dialog>
        <DialogBanner>
          <DialogBannerName>hahdfha</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <p>adfhadfhadfhadfh</p>
        </DialogContent>
        <DialogFooter>
          <ConfirmButton>Agregar: {formatPrice(100)}</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </DialogShadow>
  );
};

export default Modal;
