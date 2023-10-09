import logo from "../../../assets/images/LogoSportSee.png";
import LoginForm from "./LoginForm.jsx";
import { styled } from "styled-components";

export default function Login() {
  return (
    <LoginStyled>
      <img src={logo} alt="logo de sport-see" />
      <LoginForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  max-width: 1600px;
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  img {
    width: 300px;
    height: 100px;
    margin-bottom: 60px;
  }
`;
