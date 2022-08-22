import React from 'react';
import { RiDeleteBin2Line } from "react-icons/ri";
import styled from 'styled-components';
import { colorPageOrange } from '../../styles/utilities/colors';
import RemoveIcon from '../../assets/delete-full.svg';
import * as cartActions from '../../redux/carro/cart-actions';
import { useDispatch } from 'react-redux';

const QuantityManageStyled = styled.h3`
  min-width: 100px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow:  7px 4px 12px -2px rgba(0,0,0,0.45);
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButton = styled.div`
  width: 23px;
  color: ${colorPageOrange};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover {
    background-color: #ffe3e3;
  }
`;

const RemoveIconStyled = styled(RiDeleteBin2Line)`
  width: 34px !important;
  height: 34px !important;
  cursor: pointer;
  margin: 0 10px;
  color: orangered;
  &:hover{
    color: red;
  }
`;

export const QuantityManage = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <QuantityManageStyled>
      {+item.quantity === 1 ? (
        <RemoveIconStyled
          src={RemoveIcon}
          onClick={() => dispatch(cartActions.removeItem(item))}
        />
      ) : (
        <QuantityButton onClick={() => dispatch(cartActions.removeItem(item))}>
          -
        </QuantityButton>
      )}
      <QuantityStyled>{item.quantity}</QuantityStyled>

      <QuantityButton onClick={() => dispatch(cartActions.addItem(item))}>
        +
      </QuantityButton>
    </QuantityManageStyled>
  );
};
