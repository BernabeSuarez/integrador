import styled from 'styled-components';

export const Banner = styled.div`
width:90%;
  height: 35vh;
  margin:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('img/banner.jpg');
  //background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: space;
  filter: contrast(80%);
  color: #fff;
  position: relative;
  border-radius:15px;
  box-shadow: 3px 22px 21px 1px rgba(0,0,0,0.63);
  cursor: pointer;

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
    width:40%;
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
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px;
    @media (max-width: 768px) {
    display: none;
  }
  }
`;
