import { styled } from "styled-components";
import Weight from "./weight/Weight.jsx";
import Goals from "./Goals.jsx";
import RadarGraph from "./RadarGraph.jsx";
import KPI from "./KPI.jsx";

export default function Graphs({ userId }) {
  return (
    <GraphsStyled>
      <Weight userId={userId} />
      <Goals userId={userId} />
      <RadarGraph userId={userId} />
      <KPI userId={userId} />
    </GraphsStyled>
  );
}

const GraphsStyled = styled.div`
  grid-area: 1/1/2/2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 290px);
  gap: 30px;
  @media screen and (max-width: 1490px) {
    grid-template-columns: repeat(3, 230px);
    grid-template-rows: 290px 250px;
  }
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: 283px 200px;
  }
`;
