import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Error() {
  return (
    <ErrorStyled>
      <h1>Page introuvable</h1>
      <Link to="/" className="return-link">
        Retour à la page d'accueil
      </Link>
    </ErrorStyled>
  );
}

const ErrorStyled = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1600px;
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    color: #ff0101b2;
    margin-bottom: 50px;
  }
  .return-link {
    color: black;
  }
`;
