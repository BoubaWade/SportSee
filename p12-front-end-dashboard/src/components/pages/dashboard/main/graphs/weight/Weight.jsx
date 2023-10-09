import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, YAxis } from "recharts";
import { styled } from "styled-components";
import { getDataActivity } from "../../../../../../serviceAPI/user";
import Header from "./Header";
import Footer from "./Footer";
import {
  CustomTooltip,
  getFormatedDatasActivity,
} from "../../../../../../config/configDatasActivity";
import { hardCodeDatas } from "../../../../../../config/defaultDatas";

export default function Weight({ userId }) {
  const [dataActivity, setDataActivity] = useState([]);

  useEffect(() => {
    getDataActivity(userId)
      .then((response) => {
        const formatedDatas = response.data.data.sessions.map((dataAPI) =>
          getFormatedDatasActivity(dataAPI)
        );
        setDataActivity(formatedDatas);
      })
      .catch((err) => {
        const defaultDatas = hardCodeDatas.activity.find(
          (data) => data.userId === userId
        );
        const defaultDatasFiltered = defaultDatas.sessions.map((data) =>
          getFormatedDatasActivity(data)
        );
        setDataActivity(defaultDatasFiltered);
      });
  }, [userId]);

  return (
    <WeightStyled className="wheight">
      <Header />
      <BarChart
        className="barChart"
        width={700}
        height={185}
        data={dataActivity}
        barGap={8}
        margin={{
          bottom: 15,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <YAxis
          tickLine={false}
          orientation="right"
          minTickGap={4}
          axisLine={false}
          tickMargin={20}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="kilogram"
          barSize={7}
          fill="#282D30"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          dataKey="calories"
          barSize={7}
          fill="#E60000"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
      <Footer dataActivity={dataActivity} />
    </WeightStyled>
  );
}

const WeightStyled = styled.div`
  background-color: #fbfbfb;
  width: 900px;
  grid-area: 1/1/2/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  .custom-tooltip {
    background-color: #e60000;
    width: 40px;
    height: 63px;
    top: 0;
    right: 0;
    color: #ffffff;
    font-size: 8px;
    font-weight: 500;
    transform: translate(40px, -50px);
    .label {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 640px;
    height: 300px;
    position: relative;
    .recharts-surface {
      width: 540px;
      height: 150px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
