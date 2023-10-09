import { useEffect, useState } from "react";
import { getDataAverageSessions } from "../../../../../../serviceAPI/user";
import { Line, LineChart, Tooltip, YAxis } from "recharts";
import { styled } from "styled-components";
import {
  DAYSOFWEEK,
  CustomTooltip,
  getFormatedDatasSessions,
} from "../../../../../../config/configDatasSessions";
import { getMouseHover } from "./CustomGoals";
import { hardCodeDatas } from "../../../../../../config/defaultDatas";

export default function Goals({ userId }) {
  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    getDataAverageSessions(userId)
      .then((response) => {
        const formatedDatas = response.data.data.sessions.map((dataAPI) =>
          getFormatedDatasSessions(dataAPI)
        );
        setUserDatas(formatedDatas);
      })
      .catch((error) => {
        const defaultDatas = hardCodeDatas.averageSessions.find(
          (data) => data.userId === userId
        );
        const defaultDatasFiltered = defaultDatas.sessions.map((data) =>
          getFormatedDatasSessions(data)
        );
        setUserDatas(defaultDatasFiltered);
      });
  }, [userId]);

  return (
    <GoalsStyled id="goals">
      <p className="title">Durée moyenne des sessions</p>
      <LineChart
        className="line-goals"
        width={280}
        height={160}
        data={userDatas}
        margin={{
          top: 15,
          right: 5,
          left: 5,
          bottom: 15,
        }}
        onMouseMove={(e) => getMouseHover(e)}
      >
        <YAxis hide />
        <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0 }} />
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
      <ul className="days-of-week">
        {DAYSOFWEEK.map((day, index) => {
          return <li key={index}>{day}</li>;
        })}
      </ul>
    </GoalsStyled>
  );
}
const GoalsStyled = styled.div`
  width: 280px;
  position: relative;
  background-color: #ff0000;
  grid-area: 2/1/2/2;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 0px #00000005;
  .title {
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
  .days-of-week {
    width: 270px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 15px;
    opacity: 0.5;
    li {
      color: #ffffff;
      font-size: 12px;
      font-weight: 500;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    .line-goals {
      width: 200px;
      height: 130px;
    }
    .recharts-wrapper {
      .recharts-surface {
        width: 200px;
        height: 110px;
      }
    }
    .title {
      font-size: 12px;
    }
    .days-of-week {
      width: 190px;
      height: 20px;
      margin: 0 auto;
      transform: translateY(-45px);
      li {
        font-size: 10px;
        line-height: 20px;
      }
    }
  }
`;
