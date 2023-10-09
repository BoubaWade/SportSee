import Weight from "./weight/Weight";
import Goals from "./goals/Goals";
import RadarGraph from "./RadarGraph.jsx";
import KPI from "./score/KPI";
import { styled } from "styled-components";

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
  grid-template-columns: repeat(3, 280px);
  gap: 30px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 200px);
    gap: 20px;
  }
`;
