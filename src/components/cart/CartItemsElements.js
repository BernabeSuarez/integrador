import styled from "styled-components";
import { DialogContent } from "../modal/ModalElements";


export const CarroContent = styled(DialogContent)`

  padding:2%;
  max-height: 100%;
  height: 100%;
  
`;

export const CartProducts = styled.div`
width:100%;
height:60%;
overflow-y:scroll;
&::-webkit-scrollbar {
  width: 9px;
  background-color: #fafafa;
}
&::-webkit-scrollbar-thumb {
  background: #3f3f41;
  border-radius: 15px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #6a6a6d;
}

`

export const CarroContainer = styled.div`
  width:100%;
  padding: 10px 10px;
  border-bottom: 1px solid #f7f7f7;
  

`;

export const CarroItem = styled.div`
  padding: 5px ;
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