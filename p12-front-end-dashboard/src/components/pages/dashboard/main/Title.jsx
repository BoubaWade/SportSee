import { styled } from "styled-components";

export default function Title({ userInfos }) {
  return (
    <TitleStyled>
      {userInfos && (
        <h2>
          Bonjour <span>{userInfos.firstName}</span>
        </h2>
      )}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </TitleStyled>
  );
}
const TitleStyled = styled.div`
  margin-top: 70px;
  margin-left: 224px;
  h2 {
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 30px;
    span {
      color: #ff0101;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
`;
