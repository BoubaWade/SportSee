import { useEffect, useState } from "react";
import { getDataUser } from "../../../../../../serviceAPI/user";
import { Legend, RadialBar, RadialBarChart } from "recharts";
import { styled } from "styled-components";
import { formatedScore } from "../../../../../../config/configDatasScore";
import KpiDescription from "./KpiDescription";
import { hardCodeDatas } from "../../../../../../config/defaultDatas";

export default function KPI({ userId }) {
  const [userDatas, setUserDatas] = useState([]);
  const radialBarDatas = [
    {
      name: "",
      score: 100,
      fill: "white",
    },
    {
      name: "Score",
      score: userDatas.todayScore,
    },
  ];

  useEffect(() => {
    getDataUser(userId)
      .then((response) => {
        const formatedDatas = formatedScore(response.data.data);
        setUserDatas(formatedDatas);
      })
      .catch((error) => {
        const defaultDatas = hardCodeDatas.main.find(
          (data) => data.id === userId
        );
        setUserDatas(formatedScore(defaultDatas));
      });
  }, [userId]);

  return (
    <KPIStyled>
      <KpiDescription props={userDatas.todayScore} />
      <RadialBarChart
        width={240}
        height={250}
        innerRadius="70%"
        outerRadius="90%"
        data={radialBarDatas}
      >
        <RadialBar fill="#FF0000" dataKey="score" cornerRadius={10} />
        <Legend iconSize={0} verticalAlign="top" align="left" />
      </RadialBarChart>
    </KPIStyled>
  );
}

const KPIStyled = styled.div`
  grid-area: 2/3/3/4;
  width: 280px;
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    .recharts-default-legend {
      font-size: 15px;
      transform: translate(5px, 30px);
    }
  }
`;
