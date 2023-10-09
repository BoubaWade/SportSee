import LogoSportSee from "../../../../../assets/images/LogoSportSee.png";
import { styled } from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <img src={LogoSportSee} alt="logo de Sport See" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  img {
    width: 178px;
    height: 60px;
    margin: 18px 150px 12px 28px;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 160px;
      height: 55px;
      margin: 15px 150px 10px 25px;
    }
  }
`;
