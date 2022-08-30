import React from "react";
import styled from "styled-components";
import { FcSimCardChip } from "react-icons/fc";
import { GrVisa } from "react-icons/gr";

const Card = styled.div`
  position: relative;
  width: 400px;
  min-height: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: rgb(20, 106, 170);
  background: linear-gradient(
    31deg,
    rgba(20, 106, 170, 1) 14%,
    rgba(4, 2, 62, 1) 100%
  );
  @media (max-width: 768px) {
    width: 280px;
    height: 180px;
  }
  & h2 {
    width: 100%;
    color: white;
    letter-spacing: 0.3rem;
    text-align: left;
    margin: 2%;
    @media (max-width: 768px) {
      letter-spacing: 0rem;
    }
  }
  & h3 {
    font-size: 1rem;
    width: 100%;
    color: white;
    letter-spacing: 0.4rem;
    text-align: left;
    margin: 2%;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 0.5rem;
      letter-spacing: 0.4rem2;
    }
  }
`;

const Chip = styled(FcSimCardChip)`
  width: 55px;
  height: 55px;
  margin-top: 55px;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-top: 35px;
    margin-left: 10px;
  }
`;

const LogoCard = styled(GrVisa)`
  position: absolute;
  color: white;
  width: 55px;
  height: 55px;
  margin-top: 15px;
  margin-left: 320px;
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    margin-top: 9px;
    margin-left: 230px;
  }
`;
const DataContainer = styled.div`
  width: 100%;
  padding: 8%;
  display: Flex;
  flex-direction: column;
`;
const CreditCard = ({ children }) => {
  return (
    <Card>
      <Chip />
      <LogoCard />
      <DataContainer>{children}</DataContainer>
    </Card>
  );
};

export default CreditCard;
