import { styled } from "styled-components";

export default function MacroCard({ icon, value, name }) {
  return (
    <MacroCardStyled>
      <img src={icon} />
      <div className="description">
        <p>{value}</p>
        <span>{name}</span>
      </div>
    </MacroCardStyled>
  );
}

const MacroCardStyled = styled.div`
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  padding: 32px;
  column-gap: 24px;
  border-radius: 5px;
  img {
    width: 60px;
    height: 60px;
  }
  .description {
    line-height: 24px;
    text-align: left;
    p {
      color: #282d30;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    span {
      color: #74798c;
      font-size: 14px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 20px;
    img {
      width: 45px;
      height: 45px;
    }
    .description {
      line-height: 20px;
      p {
        font-size: 16px;
      }
      span {
        font-size: 13px;
      }
    }
  }
`;
