import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import Button from "../components/button/Button";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("img/loginback.jpg");
  background-size: cover;
`;

export const FormContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  @media (max-width: 768px) {
    width: 90%;
    padding: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 2% 0;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: #c7c3c3;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  ${(
  { showError } //Colorea el input si existe un error
) =>
    showError
      ? `
          border: 3px solid  red;
          background: #ffd1d1;
        `
      : null}
`;

export const ErrorContainer = styled.div`
color: red;
font-size: 0.8rem;
font-style: italic;
`

export const GoogleButton = styled(Button)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: auto;
  }
`;
export const GoogleIcon = styled(FcGoogle)`
  width: 30px;
  height: 30px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 5% 0;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Divider = styled.div`
  display: inline-block;
  border-bottom: 1px solid #080808;
  margin-bottom: 2%;
  width: 100%;
  height: 15px;
`;