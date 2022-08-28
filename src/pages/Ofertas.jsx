import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  StockStyled,
  StockContain,
  ProductContainer,
  ProductImg,
  ProductImage,
  ProductFooter,
  H2,
  Price,
} from "../components/stock/stockElements";

const OffPrice = styled.div`
  width: 100%;
  padding: 2%;
  background-color: red;
  color: white;
`;

const Ofertas = ({ setOpenProduct }) => {
  let productsItems = useSelector((state) => state.root.products.products);

  const dataCard = productsItems.flatMap((item) => [
    {
      id: item.id,
      name: item.name,
      img: item.img,
      section: item.section,
      description: item.description,
      price: item.price * 0.75,
    },
  ]);

  return (
    <StockStyled>
      <StockContain>
        <h2 style={{ marginTop: "70px" }}>Promo 25% OFF</h2>
        <ProductContainer>
          {dataCard.map((item) => {
            if (item.price <= 10000 && item.price > 5500) {
              return (
                <ProductImg>
                  <ProductImage
                    src={item.img}
                    onClick={() => setOpenProduct(item)}
                  />
                  <ProductFooter>
                    <H2>{item.name}</H2>
                    <Price>
                      <OffPrice>25% OFF</OffPrice>
                    </Price>
                  </ProductFooter>
                </ProductImg>
              );
            }
          })}
        </ProductContainer>
      </StockContain>
    </StockStyled>
  );
};

export default Ofertas;
