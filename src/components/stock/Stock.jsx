import React from "react";
import { productsItems } from "../../data/data";
import {
  StockStyled,
  StockContain,
  ProductContainer,
  ProductImg,
  ProductImage,
  ProductFooter,
  H2,
} from "./stockElements";

const Stock = () => {
  const dataCard = productsItems.flatMap((item) => [
    {
      id: item.id,
      name: item.name,
      img: item.img,
      section: item.section,
      description: item.description,
      price: item.price,
    },
  ]);

  return (
    <StockStyled>
      <StockContain>
        <ProductContainer>
          {dataCard.map((item) => (
            <>
              <ProductImg>
                <ProductImage src={item.img} />
                <ProductFooter>
                  <H2>{item.name}</H2>
                </ProductFooter>
              </ProductImg>
            </>
          ))}
        </ProductContainer>
      </StockContain>
    </StockStyled>
  );
};

export default Stock;
