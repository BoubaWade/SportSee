import Logo from "./Logo";
import NavBarItems from "./NavBarItems";
import styled from "styled-components";

export default function NavBarTop() {
  return (
    <NavBarTopStyled>
      <Logo />
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
  overflow-x: scroll;
  @media screen and (max-width: 1024px) {
    height: 80px;
  }
`;
