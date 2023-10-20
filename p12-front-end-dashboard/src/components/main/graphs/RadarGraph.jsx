import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
  ResponsiveContainer,
} from "recharts";
import { getDataPerformance } from "../../../serviceAPI/userApiConfig";
import { getFormatedRadarDatas } from "../../../config/datasConfig";
import { styled } from "styled-components";

export default function RadarGraph({ userId }) {
  const [datasKindValue, setDatasKindValue] = useState([]);
  const [outerRadius, setOuterRadius] = useState(78);
  const [tickFontSize, setTickFontSize] = useState(12);
  const [errorDataPerformance, setErrorDataPerformance] = useState(false);

  useEffect(() => {
    getDataPerformance(userId)
      .then((response) => {
        const datasKind = response.map((item) => getFormatedRadarDatas(item));
        setDatasKindValue(datasKind);
      })
      .catch((error) => {
        setErrorDataPerformance(true);
      });
  }, [userId]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1280) {
        setOuterRadius(50);
        setTickFontSize(10);
      } else if (screenWidth <= 1490) {
        setOuterRadius(60);
        setTickFontSize(10);
      } else {
        setOuterRadius(78);
        setTickFontSize(12);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <RadarGraphStyled>
      {!errorDataPerformance ? (
        <ResponsiveContainer width="100%">
          <RadarChart outerRadius={outerRadius} data={datasKindValue}>
            <PolarGrid className="polar-grid" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "white", fontSize: tickFontSize, fontWeight: 500 }}
            />
            <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      ) : (
        <span className="error-message">Données non disponible</span>
      )}
    </RadarGraphStyled>
  );
}

const RadarGraphStyled = styled.div`
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
  .recharts-polar-angle-axis-tick {
    &:first-child {
      transform: translate(0, -2px);
    }
    &:nth-child(4) {
      transform: translate(0, 10px);
    }
  }
  .error-message {
    color: white;
    font-size: 13px;
  }
`;
