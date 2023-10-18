import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ userId }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/" + "12");
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        defaultValue="Karl"
        placeholder={"Entrez votre prénom"}
      />
      <input
        type="text"
        defaultValue="Dovineau"
        placeholder={"Entrez votre nom"}
      />
      <button type="submit">Valider</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background-color: #e60000;
  max-width: 500px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 10px;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 50px;
  }
  input {
    width: 200px;
    height: 35px;
    margin-bottom: 20px;
    padding: 15px;
    border: none;
    text-align: center;

    border-radius: 5px;
  }
  button {
    background-color: white;
    font-size: 1rem;
    margin-top: 10px;
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
