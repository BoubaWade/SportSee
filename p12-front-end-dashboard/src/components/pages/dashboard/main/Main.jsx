import { useEffect, useState } from "react";
import Macros from "./macro-cards/Macros";
import Graphs from "./graphs/Graphs";
import { getDataUser } from "../../../../serviceAPI/user";
import { styled } from "styled-components";
import Title from "./Title";
import { hardCodeDatas } from "../../../../config/defaultDatas";

export default function Main({ userId }) {
  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    getDataUser(userId)
      .then((response) => {
        setUserDatas(response.data.data);
      })
      .catch((error) => {
        const defaultDatas = hardCodeDatas.main.find(
          (data) => data.id === userId
        );
        setUserDatas(defaultDatas);
      });
  }, [userId]);

  return (
    <MainStyled>
      <Title userInfos={userDatas.userInfos} />
      <div className="components-container">
        <Graphs userId={userId} />
        <Macros macrosDatas={userDatas.keyData} />
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  .components-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 613px;
    gap: 30px;
    margin-left: 15%;
    margin-right: 10%;
    margin-top: 77px;
  }
  @media screen and (max-width: 1024px) {
    .components-container {
      grid-template-rows: 520px;
      gap: 20px;
      margin-left: 135px;
    }
  }
`;
