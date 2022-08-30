import React from "react";
import { FcOk } from "react-icons/fc";
import styled from "styled-components";

import {
  Dialog,
  DialogBanner,
  DialogContent,
  DialogShadow,
} from "./ModalElements";

const Icon = styled(FcOk)`
  width: 50px;
  height: 50px;
`;

const ConfirmCompraContainer = () => {
  return (
    <DialogShadow>
      <Dialog>
        <DialogContent>
          <Icon />
        </DialogContent>
        <DialogContent>
          <h3>Felicitaciones; has realizado tu compra</h3>
          <p>
            nos contactaremos contigo via email, para enviarte los datos del
            envio
          </p>
          <p>Muchas gracias por confiar en nosotros!</p>
        </DialogContent>
      </Dialog>
    </DialogShadow>
  );
};

export const ConfirmCompra = (props) => {
  if (!props.show) return null;
  return <ConfirmCompraContainer {...props} />;
};
