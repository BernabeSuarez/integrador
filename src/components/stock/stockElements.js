import styled from "styled-components";


export const StockStyled = styled.div`
  height: auto;
  z-index: 3;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const StockContain = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;

  @media screen and (max-width: 700px) {
    padding: 0 20px;
  }
`;
export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    padding: 50px 0;
  }
`;

export const ProductImg = styled.div`
  height: 400px;
  padding: 10px;
  font-size: 25px;
  color: #000;
  border-radius: 7px;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  box-shadow: 0px 5px 14px 0px grey;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    background-size: 150%;
  }
`;
export const ProductImage = styled.img`
  filter: contrast(85%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 0.5s ease;

  &:hover {
    filter: contrast(100%);
    transform: scale(1.2);
  }
`;
export const ProductFooter = styled.div`
  width: 100%;
  height:50%;
  background-color: #fafafa;
`;
export const H2 = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
   font-family: "Inter";
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;
export const Price = styled.h3`
position: absolute;
font-family: "Roboto";
font-size: 1rem;

`;
export const SelectContainer = styled.div`
  width:25%;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`;
export const Selectmenu = styled.select`
 height: 3rem;
 border: none;
 margin-top:2rem;
 border-bottom: 1px solid black;
 background-color: transparent;
 font-family:"WorkSalt";
 font-size:1.5rem;
& option{
	background-color: #DBDBDB;
  border: none;
   
}
&:focus-within {
   border: none;
}
@media (max-width: 768px) {
    width: 100%;
    font-size:1rem;
  }

`;

