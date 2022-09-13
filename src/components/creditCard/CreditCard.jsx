import React from "react";
import styled from "styled-components";
import { FcSimCardChip } from "react-icons/fc";
import { GrVisa } from "react-icons/gr";

const Card = styled.div`
  position: relative;
  width: 380px;
  min-height: 220px;
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
    font-family: "Kredit";
    width: 100%;
    font-size: 1rem;
    font-weight: 200;
    color: white;
    letter-spacing: 0.3rem;
    text-align: left;
    margin: 2%;
    @media (max-width: 768px) {
      letter-spacing: 0rem;
    }
  }
  & h3 {
    font-family: "Kredit";
    font-size: 0.9rem;
    font-weight: 200;
    width: 100%;
    color: white;
    letter-spacing: 0.4rem;
    text-align: left;
    margin: 2%;
    text-transform: uppercase;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      letter-spacing: 0.4rem2;
    }
  }
`;

const Chip = styled(FcSimCardChip)`
  width: 50px;
  height: 50px;
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
  width: 50px;
  height: 50px;
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
  padding: 6%;
  display: Flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 10% 5%;
  }
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
