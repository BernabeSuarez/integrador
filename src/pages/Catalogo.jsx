import React, { useState } from "react";
import { formatPrice } from "../utils/formatPrice";
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
  SelectContainer,
  Selectmenu,
} from "../components/stock/stockElements";

const Catalogo = ({ setOpenProduct }) => {
  const [select, setSelect] = useState();

  let productsItems = useSelector((state) => state.root.products.products);
  if (select) {
    //filtrar productos por categoria
    productsItems = productsItems.filter((item) => item.section === select);
  }
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

  console.log(productsItems);
  return (
    <StockStyled>
      <SelectContainer>
        <Selectmenu onChange={(event) => setSelect(event.target.value)}>
          <option value="" selected disabled hidden>
            CATALOGO
          </option>
          <option value="Remeras">REMERAS</option>
          <option value="Calzado">CALZADO</option>
          <option value="Gorras">GORRAS</option>
          <option value="">CATALOGO COMPLETO</option>
        </Selectmenu>
      </SelectContainer>

      <StockContain>
        <ProductContainer>
          {dataCard.map((item) => (
            <>
              <ProductImg>
                <ProductImage
                  src={item.img}
                  onClick={() => setOpenProduct(item)}
                />
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

export default Catalogo;
