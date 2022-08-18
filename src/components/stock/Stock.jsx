import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useSelector } from "react-redux";
import {
  StockStyled,
  StockContain,
  ProductContainer,
  ProductImg,
  ProductImage,
  ProductFooter,
  H2,
  Price,
} from "./stockElements";

const Stock = () => {
  const productsItems = useSelector((state) => state.root.products.products);
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
                  <Price>{formatPrice(item.price)}</Price>
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
