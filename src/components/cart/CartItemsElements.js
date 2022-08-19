import styled from "styled-components";
import { DialogContent } from "../modal/ModalElements";


export const CarroContent = styled(DialogContent)`

  max-height: 100%;
  height: 100%;
  z-index:350;
  
`;

export const EmptyCart = styled(DialogContent)`
width: 100%;
min-height:50%;
  z-index:350;
  border: 1px solid black;
  border-radius: 20px;
`

export const CartProducts = styled.div`
width:100%;
height:100%;
overflow-y:scroll;
`

export const CarroContainer = styled.div`
  width:100%;
  border-bottom: 1px solid #f7f7f7;
  

`;

export const CarroItem = styled.div`
  padding: 2px ;
  display: grid;
  grid-template-columns: 20%  40% 40%;
  justify-content: space-around;
  border-bottom: 1px solid black;
  

   @media (max-width: 768px) {
    grid-template-columns: 20%  40% 40%;
    
  }
`;

export const ItemImg = styled.div`
  width: 100%;
  height: 4rem;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  object-fit: cover;
  
`;

export const CartFooter = styled.div`
width:100%;
max-height: 3rem;
`