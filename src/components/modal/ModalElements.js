import styled from 'styled-components';
import { colorPageBlack } from '../../styles/utilities/colors'

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
   //position: fixed; 
  z-index: 1000;
  max-height: 100vh;
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 50%;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    max-width: 94%;
    left: 3%;
    height: 80%;
  }
`;

export const DialogBanner = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px 0px;
  position: relative;
  min-height: 60%;
`;
export const Title = styled.div`
  font-family: 'Roboto', cursive;
  font-weight: 700;
  z-index: 999;
`;

export const Label = styled(Title)`
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

export const DialogBannerName = styled(Label)`
  bottom: 0;
  padding: 10px 40px;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const DialogContent = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  min-height: 100px;
  max-height: 200px; 
  padding: 40px;
  height: 80%;
`;



export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: ${colorPageBlack};
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
    background-color: red;
  }
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top:0;
  background-color: #000000e6;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &* {
    z-index: 5;
  }
`;
