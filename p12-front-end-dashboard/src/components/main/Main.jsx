import { useEffect, useState } from "react";
import Macros from "./Macros.jsx";
import Graphs from "./graphs/Graphs.jsx";
import { getDataUser } from "../../serviceAPI/userApiConfig.js";
import { styled } from "styled-components";

export default function Main({ userId }) {
  const [userDatas, setUserDatas] = useState([]);
  const [firstName, setFirstName] = useState();
  const [errorDatas, setErrorDatas] = useState(false);

  useEffect(() => {
    getDataUser(userId)
      .then((response) => {
        setUserDatas(response);
        setFirstName(response.userInfos.firstName);
      })
      .catch((error) => {
        setErrorDatas(true);
      });
  }, [userId]);

  return (
    <MainStyled>
      <div className="title">
        {!errorDatas ? (
          <>
            <h2>
              Bonjour <span>{firstName}</span>
            </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </>
        ) : (
          <span>Données non disponible ⛑️ </span>
        )}
      </div>
      <div className="components-container">
        <Graphs userId={userId} />
        <Macros macrosDatas={userDatas.keyData} />
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  width: calc(100% - 110px);
  position: absolute;
  left: 110px;
  margin: 0 auto;
  .title {
    margin-top: 70px;
    margin-left: 224px;
    h2 {
      font-size: 48px;
      font-weight: 500;
      margin-bottom: 30px;
      span {
        color: #ff0101;
      }
    }
    p {
      font-size: 18px;
      font-weight: 400;
    }
  }
  .components-container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 613px;
    gap: 30px;
    margin-top: 77px;
  }
  @media screen and (max-width: 1490px) {
    .components-container {
      grid-template-columns: 750px 260px;
      gap: 50px;
      grid-template-rows: 583px;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 1280px) {
    .title {
      h2 {
        font-size: 45px;
      }
    }
    .components-container {
      grid-template-columns: 660px 200px;
      gap: 25px;
    }
  }
  @media screen and (max-width: 1024px) {
    .title {
      h2 {
        font-size: 40px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;
