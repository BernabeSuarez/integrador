import styled from 'styled-components';
import { colorPageDarkBlue, colorPageGray } from '../../styles/utilities/colors'

export const HeroContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const H1 = styled.h1`
  margin: 2%;
  color: ${colorPageGray}
`;
export const P = styled.p`
  margin: 2%;
  color: ${colorPageGray}
`;

export const HeroAction = styled.div`
  width: 50%;
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