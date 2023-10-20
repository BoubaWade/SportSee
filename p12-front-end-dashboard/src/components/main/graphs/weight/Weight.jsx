import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { styled } from "styled-components";
import { getDataActivity } from "../../../../serviceAPI/userApiConfig";
import Header from "./Header";
import { getFormatedDatasActivity } from "../../../../config/datasConfig";

export default function Weight({ userId }) {
  const [dataActivity, setDataActivity] = useState([]);
  const [errorDataActivity, setErrorDataActivity] = useState(false);

  const CustomTooltipActivity = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="label">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };
  useEffect(() => {
    getDataActivity(userId)
      .then((response) => {
        const formatedDatas = response.map((data) =>
          getFormatedDatasActivity(data)
        );
        setDataActivity(formatedDatas);
      })
      .catch((error) => {
        setErrorDataActivity(true);
      });
  }, [userId]);

  return (
    <WeightStyled className="wheight">
      <Header />
      {!errorDataActivity ? (
        <ResponsiveContainer width="100%">
          <BarChart
            className="barChart"
            data={dataActivity}
            barGap={8}
            margin={{
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              dy={10}
              fontSize={14}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="kilogram"
              yAxisId="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={["dataMin-2", "dataMax+2"]}
              tickCount={5}
            />
            <YAxis
              dataKey="calories"
              yAxisId="calories"
              domain={["dataMin-90", "dataMax+90"]}
              hide={true}
            />
            <Tooltip content={<CustomTooltipActivity />} />
            <Bar
              dataKey="kilogram"
              yAxisId="kilogram"
              barSize={7}
              fill="#282D30"
              radius={[5, 5, 0, 0]}
            />
            (
            <Bar
              dataKey="calories"
              yAxisId="calories"
              barSize={7}
              fill="#E60000"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <span className="error-message">Données indisponibles ⛑️ </span>
      )}
    </WeightStyled>
  );
}

const WeightStyled = styled.div`
  background-color: #fbfbfb;
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
  .error-message {
    font-size: 14px;
    margin: auto;
  }
`;
