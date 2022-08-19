import styled from "styled-components";
import { DialogContent } from "../modal/ModalElements";

export const CarroContent = styled(DialogContent)`

  padding: 20px;
  max-height: 100%;
  height: 100%;
`;

export const CarroContainer = styled.div`
  padding: 10px 10px;
  border-bottom: 1px solid #f7f7f7;
`;

export const CarroItem = styled.div`
width:100%;
  padding: 10px ;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
`;

export const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;