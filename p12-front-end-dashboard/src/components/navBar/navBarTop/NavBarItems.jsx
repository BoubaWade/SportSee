import { styled } from "styled-components";

export default function NavBarItems() {
  return (
    <NavBarItemsStyled>
      <li>Accueil</li>
      <li>Profil</li>
      <li>Réglage</li>
      <li>Communauté</li>
    </NavBarItemsStyled>
  );
}

const NavBarItemsStyled = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    li {
      font-size: 18px;
    }
  }
`;
