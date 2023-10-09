import { styled } from "styled-components";

export default function Footer({ dataActivity }) {
  return (
    <FooterStyled>
      {dataActivity &&
        dataActivity.map((data) => <li key={data.day}>{data.day}</li>)}
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  width: 690px;
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateX(-30px);
  @media screen and (max-width: 1024px) {
    width: 500px;
    margin: 0 0 30px 15px;
  }
`;
