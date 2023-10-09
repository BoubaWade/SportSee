import iconYoga from "../../../../../assets/icons/iconYoga.png";
import iconSwim from "../../../../../assets/icons/iconSwim.png";
import iconVelo from "../../../../../assets/icons/iconVelo.png";
import iconDumbbell from "../../../../../assets/icons/iconDumbbell.png";
import styled from "styled-components";

export default function NavBarLeft() {
  return (
    <NavBarLeftStyled>
      <div className="icons-contianer">
        <img src={iconYoga} />
        <img src={iconSwim} />
        <img src={iconVelo} />
        <img src={iconDumbbell} />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </NavBarLeftStyled>
  );
}

const NavBarLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 117px;
  height: 1024px;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  background-color: #020203;
  padding-right: 90px;
  box-shadow: 0px 4px 4px 0px #00000040;
  .icons-contianer {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    position: absolute;
    top: 345px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 65px;
      height: 65px;
    }
  }
  span {
    width: 200px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    color: #ffffff;
    bottom: 140px;
    left: -42px;
    transform: rotate(-90deg);
  }
  @media screen and (max-width: 1024px) {
    width: 90px;
    .icons-contianer {
      img {
        width: 50px;
        height: 50px;
      }
    }
    span {
      font-size: 12px;
      left: -50px;
    }
  }
`;
