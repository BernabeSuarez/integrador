import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MenuContainer = styled.div`
  width: 80%;
  height: 65vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TagCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 19px 0 rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  filter: grayscale(80%);

  cursor: pointer;
  &:hover {
    filter: grayscale(0%);
    background: #e8e8e8;
    box-shadow: none;
  }
`;
const TagImg = styled.img`
  width: 100%;
  transition: 0.2s ease;
`;

const Title = styled.h3`
  margin: 1em auto 1em;
`;

const Menu = () => {
  const categoriesItems = useSelector(
    (state) => state.root.products.categories
  );
  const dataCard = categoriesItems.flatMap((item) => [
    {
      img: item.img,
      section: item.section,
    },
  ]);
  return (
    <MenuContainer>
      {dataCard.map((item) => (
        <>
          <TagCard>
            <TagImg src={item.img} />
            <Title>{item.section}</Title>
          </TagCard>
        </>
      ))}
    </MenuContainer>
  );
};

export default Menu;
