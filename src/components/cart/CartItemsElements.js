import styled from "styled-components";
import { DialogContent } from "../modal/ModalElements";


export const CarroContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  min-height: 100px;
  max-height: 200px; 
  margin-top:3px;
  margin-bottom: 2px;
  padding: 5px 5px 10px 5px;
  height: 100%;
  max-height: 100%;
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
  border-bottom: 1px solid #f7f7f7;
  

`;

export const CarroItem = styled.div`
padding: 5px 5px 0 5px;
  display: grid;
  grid-template-columns: 20%  40% 40%;
  justify-content: space-around;
  border-bottom: 1px solid black;
  

   @media (max-width: 768px) {
    grid-template-columns: 20%  40% 40%;
    
  }
`;
export const CartButton = styled.div`
box-shadow: 3px 29px 21px 4px rgba(0,0,0,0.76);
`



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