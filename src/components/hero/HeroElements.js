import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('img/HeroBack2.jpg');
  background-size: cover;
  filter:contrast(85%);

  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const H1 = styled.h2`
font-family: "RockSalt";
font-size:2.5rem;
letter-spacing: 0.2rem;
  margin: 1%;
  color: antiquewhite;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const P = styled.p`
font-family: "RockSalt";
letter-spacing: 0.2rem;
font-size: 2rem;
  margin: 1%;
  color: antiquewhite;
   @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroAction = styled.div`
  width: 100%;
  margin: 1em auto 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const HeroImg = styled.div`
  width: 50%;
  padding: 1em 0em 2em;
  margin: 1em auto 2em;
  @media (max-width: 768px) {
    width: 100%;
  }
`;