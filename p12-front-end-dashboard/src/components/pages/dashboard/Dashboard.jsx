import NavBarTop from "./navBar/navBarTop/NavBarTop.jsx";
import NavBarLeft from "./navBar/navBarLeft/NavBarLeft.jsx";
import Main from "./main/Main.jsx";
import { styled } from "styled-components";

export default function Dashboard({ userId }) {
  return (
    <DashboardStyled>
      <NavBarTop />
      <NavBarLeft />
      <Main userId={userId} />
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  width: 100%;
  max-width: 1600px;
  min-width: 1024px;
  height: 100vh;
  margin: auto;
  padding-bottom: 85px;
  @media screen and (max-width: 1024px) {
  }
`;
