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
  filter: contrast(100%);
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

  & h2 {
    font-family:"WorkSans";
    text-transform: uppercase;
    margin: 0 20px;
    text-align: center;
    font-size: clamp(2rem, 4vw, 4rem);
  }

  & p {
    text-align: center;
    font-size: clamp(1.5rem, 2vw, 3rem);
    width: 100%;
    margin: 50px 20px 0;
    border-top: 1px solid #fafafa;
    border-bottom: 1px solid #fafafa;
    padding: 20px;
  }
`;
