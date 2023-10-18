import NavBarTop from "../components/navBar/navBarTop/NavBarTop.jsx";
import NavBarLeft from "../components/navBar/NavBarLeft.jsx";
import Main from "../components/main/Main.jsx";
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
  position: relative;
  width: 100%;
  max-width: 1600px;
  height: 100vh;
  margin: auto;
`;
