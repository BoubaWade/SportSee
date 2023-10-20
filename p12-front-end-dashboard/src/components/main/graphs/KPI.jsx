import { useEffect, useState } from "react";
import { getDataUser } from "../../../serviceAPI/userApiConfig";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { styled } from "styled-components";
import { formatedScore, radialBarDatas } from "../../../config/datasConfig";

export default function KPI({ userId }) {
  const [userDatas, setUserDatas] = useState([]);
  const [errorDatas, setErrorDatas] = useState(false);
  const initialRadiusState = { innerRadius: "65%", outerRadius: "80%" };
  const [radius, setRadius] = useState(initialRadiusState);

  useEffect(() => {
    getDataUser(userId)
      .then((response) => {
        const formatedDatas = formatedScore(response);
        setUserDatas(formatedDatas);
      })
      .catch((error) => {
        setErrorDatas(true);
      });
  }, [userId]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1280) {
        setRadius({ ...radius, innerRadius: "80%", outerRadius: "100%" });
      } else {
        setRadius(initialRadiusState);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <KPIStyled>
      {!errorDatas ? (
        <>
          <div className="score-description">
            <span className="score">{userDatas.todayScore + "%"}</span>
            <p>
              de votre
              <br /> objectif
            </p>
          </div>
          <ResponsiveContainer width="100%">
            <RadialBarChart
              innerRadius={radius.innerRadius}
              outerRadius={radius.outerRadius}
              data={radialBarDatas(userDatas)}
            >
              <RadialBar fill="#FF0000" dataKey="score" cornerRadius={10} />
              <Legend iconSize={0} verticalAlign="top" align="left" />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <span className="error-score">Données indisponibles</span>
      )}
    </KPIStyled>
  );
}

const KPIStyled = styled.div`
  grid-area: 2/3/3/4;
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding-top: 10px;
  .score-description {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    .score {
      color: #282d30;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      color: #74798c;
      font-size: 13px;
      font-weight: 500;
    }
  }
  .error-score {
    font-size: 14px;
  }
`;
