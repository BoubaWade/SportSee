import React from 'react'
import { styled } from 'styled-components';

export default function KpiDescription({props}) {
  return (
        <KpiDescriptionStyled >
        <span>{props + "%"}</span>
        <p>
          de votre
          <br /> objectif
        </p>
      </KpiDescriptionStyled>
  )
}
const  KpiDescriptionStyled= styled.div`
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
    span {
      color: #282d30;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      color: #74798c;
      font-size: 14px;
      font-weight: 500;
    }
`;