import React from "react";
import { styled } from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <p>Activité quotidienne</p>
      <ul>
        <li className="poids">
          <span></span>Poids (kg)
        </li>
        <li className="calorie">
          <span></span>Calories brûlées (kCal)
        </li>
      </ul>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 35px 40px;
  p {
    color: #20253a;
    font-size: 15px;
    font-weight: 500;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 277px;
    height: 25px;
    font-size: 14px;
    color: #74798c;
    font-weight: 500;
    .poids {
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #282d30;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
    .calorie {
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #e60000;
        margin-right: 10px;
        border-radius: 50%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 14px;
      font-weight: 500;
    }
    ul {
      font-size: 13px;
    }
  }
`;
