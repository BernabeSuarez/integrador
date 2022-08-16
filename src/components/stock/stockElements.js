import styled from "styled-components";


export const StockStyled = styled.div`
  height: auto;
  z-index: 3;
  display: flex;
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
  height: 200px;
  padding: 10px;
  font-size: 25px;
  color: #000;
  border-radius: 7px;
  transition-property: box-shadow;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
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
  background-color: #fafafa;
`;
export const H2 = styled.h2`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;