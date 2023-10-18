import LogoSportSee from "../../../assets/images/LogoSportSee.png";
import NavBarItems from "./NavBarItems";
import styled from "styled-components";

export default function NavBarTop() {
  return (
    <NavBarTopStyled>
      <img src={LogoSportSee} alt="logo de Sport See" />
      <NavBarItems />
    </NavBarTopStyled>
  );
}

const NavBarTopStyled = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: #020203;
  padding-right: 90px;
  box-shadow: 0px 4px 4px 0px #00000040;
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
