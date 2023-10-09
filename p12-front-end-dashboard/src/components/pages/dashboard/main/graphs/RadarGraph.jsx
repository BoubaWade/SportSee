import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getDataPerformance } from "../../../../../serviceAPI/user";
import { getFormatedRadarDatas } from "../../../../../config/configDatasRadar";
import { styled } from "styled-components";
import { hardCodeDatas } from "../../../../../config/defaultDatas";

export default function RadarGraph({ userId }) {
  const [datasKindValue, setDatasKindValue] = useState([]);

  useEffect(() => {
    getDataPerformance(userId)
      .then((response) => {
        const datasKind = response.data.data.data.map((item) =>
          getFormatedRadarDatas(item)
        );
        setDatasKindValue(datasKind);
      })
      .catch((err) => {
        const defaultDatas = hardCodeDatas.performance.find(
          (data) => data.userId === userId
        );
        const defaultDatasFiltered = defaultDatas.data.map((data) =>
          getFormatedRadarDatas(data)
        );
        setDatasKindValue(defaultDatasFiltered);
      });
  }, [userId]);

  return (
    <RadarGraphStyled>
      <RadarChart
        outerRadius={70}
        width={258}
        height={263}
        data={datasKindValue}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 12, fontWeight: 500 }}
          // axisLine={false}

          // tickFormatter={(tick, index) => {
          //   if (index === 0 || index === datasKindValue.length - 1) {
          //     return (
          //       <tspan x="0" dy="10">
          //         {tick}
          //       </tspan>
          //     );
          //   }
          //   return tick;
          // }}
          // tickFormatter={() => {}}
        />

        {/* <Label style={{ fontSize: 30 }} /> */}
        {/* </PolarAngleAxis> */}

        {/* <PolarRadiusAxis angle={30} tick={false} /> */}
        <Radar
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.7}
        />
      </RadarChart>
    </RadarGraphStyled>
  );
}

const RadarGraphStyled = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282d30;
  grid-area: 2/2/2/3;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  .recharts-polar-grid-angle {
    display: none;
  }
  .recharts-polar-angle-axis {
    .recharts-polygon :first-child {
      margin: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    .recharts-surface {
      width: 195px;
      height: 190px;
      transform: translate(0px, 40px);
    }
    .recharts-polar-angle-axis-ticks :first-child {
      font-size: 14px;
    }
  }
`;
