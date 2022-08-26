import styled from 'styled-components';

export const Banner = styled.div`
width: 900px;
  height: 30vh;
  //margin: 25% auto 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-image: url('img/HeroBack.jpg');
  //background-attachment: fixed;
  background-position: center;
  background-size: contain;
  background-repeat: round;
  transition:0.5s;
  filter: contrast(75%);
  color: #fff;
  position: relative;
  border-radius:15px;
  box-shadow: 3px 22px 21px 1px rgba(0,0,0,0.63);
  animation: changeBg 20s infinite;
  cursor: pointer;
  
  @keyframes changeBg{
   0%,100% {background-image: url("img/Calzado-2.jpg");}
   20% {background-image: url("img/Remera-1.jpg"); }
   40% {background-image: url("img/Gorra-2.jpg");}
   65% {background-image: url("img/Calzado-3.jpg");}
   80% {background-image: url("img/Remera-2.jpg");}
 
}


  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    border-radius:15px;
  }

  & * {
    z-index: 2;
  }

  & img {
    width:100%;
    filter: drop-shadow(5px 8px 1.2px #fafafa);
    @media (max-width: 768px) {
    width:80%
  }
  }

  & p {
    font-family:"RockSalt";
    font-weight:500;
    color: black;
    text-align: center;
    font-size: clamp(1.5rem, 2vw, 3rem);
    width: 100%;
    margin: 5px 2px 0;
    //border-top: 1px solid black;
    //border-bottom: 1px solid black;
    padding: 20px;
    @media (max-width: 768px) {
    display: none;
  }
  }
`;
