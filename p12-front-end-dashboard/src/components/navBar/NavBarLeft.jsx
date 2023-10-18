import iconYoga from "../../assets/icons/iconYoga.png";
import iconSwim from "../../assets/icons/iconSwim.png";
import iconVelo from "../../assets/icons/iconVelo.png";
import iconDumbbell from "../../assets/icons/iconDumbbell.png";
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
  width: 110px;
  height: 950px;
  position: absolute;
  background-color: #020203;
  padding-right: 90px;
  box-shadow: 0px 4px 4px 0px #00000040;
  .icons-contianer {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 65px;
      height: 65px;
      cursor: pointer;
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
`;
