import { useEffect, useState } from "react";
import { getDataAverageSessions } from "../../../serviceAPI/userApiConfig";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { styled } from "styled-components";
import { getFormatedDatasSessions } from "../../../config/datasConfig";
import { getMouseHover } from "../../../config/datasConfig";

export default function Goals({ userId }) {
  const [userDatas, setUserDatas] = useState([]);
  const [errorAverageSessions, setErrorAverageSessions] = useState(false);

  const CustomTooltipSessions = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-container">
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    getDataAverageSessions(userId)
      .then((response) => {
        const formatedDatas = response.sessions.map((data) =>
          getFormatedDatasSessions(data)
        );
        setUserDatas(formatedDatas);
      })
      .catch((error) => {
        setErrorAverageSessions(true);
      });
  }, [userId]);

  return (
    <GoalsStyled id="goals">
      <p className="title-goals">Durée moyenne des sessions</p>
      {!errorAverageSessions ? (
        <ResponsiveContainer width="100%" height="65%">
          <LineChart
            className="line-goals"
            data={userDatas}
            margin={{
              top: 15,
              right: 5,
              left: 5,
              bottom: 0,
            }}
            onMouseMove={(e) => getMouseHover(e)}
          >
            <XAxis
              dataKey="firstLettersOfDays"
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fontSize: 12, fill: "white" }}
              tickLine={false}
              axisLine={false}
              opacity={0.6}
              interval="preserveStartEnd"
              tickMargin={15}
            />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltipSessions />}
              cursor={{ opacity: 0 }}
            />
            <Line
              style={{ width: 150 }}
              className="line"
              type="monotone"
              dataKey="sessionLength"
              activeDot={{
                stroke: "rgba(255, 255, 255, 0.3)",
                strokeWidth: 8,
                r: 4,
              }}
              stroke="#FFFFFF"
              dot={0}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <span className="error-message"> Données indisponibles</span>
      )}
    </GoalsStyled>
  );
}
const GoalsStyled = styled.div`
  position: relative;
  background-color: #ff0000;
  grid-area: 2/1/2/2;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  .title-goals {
    width: 147px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 500;
    margin: 30px 0 0 35px;
    opacity: 0.5;
  }
  .tooltip-container {
    .custom-tooltip {
      width: 40px;
      height: 25px;
      background-color: #ffffff;
      .label {
        font-size: 8px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
      }
    }
  }
  .error-message {
    display: inline-block;
    color: white;
    font-size: 13px;
    margin-left: 20%;
    margin-top: 25%;
  }
  @media screen and (max-width: 1280px) {
    .title-goals {
      font-size: 12px;
      margin: 20px 0 0 35px;
    }
  }
`;
