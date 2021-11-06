import styled, { keyframes } from "styled-components";

interface IProps {
  menuOpen: boolean;
  toggleMenu: (arg: boolean) => void;
}

const Hamburger: React.FC<IProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <HamburgerStyled
      className={`${menuOpen && "open"}`}
      onClick={() => toggleMenu(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
      <p className="text-green-500">Menu</p>
    </HamburgerStyled>
  );
};

export default Hamburger;

const menu_text_animation = keyframes`
    0%{
        transform: translate(-50%, 120%) rotate(-15deg);
    }
    25%{
        transform: translate(-50%, 50%) rotate(-5deg);
    }
    50%{
        transform: translate(-50%, -15%) rotate(0deg);
    }
    75%{
        transform: translate(-50%, 0%) rotate(5deg);
    }
    95%{
        transform: translate(-50%, 45%) rotate(-2deg);
    }
    100%{
        transform: translate(-50%, 45%) rotate(0deg);
    }
`;

const HamburgerStyled = styled.button`
  margin: auto;
  width: 2.5rem;
  height: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & span {
    width: 100%;
    height: 6px;
    display: block;
    background: #fff;
    transition: all 0.3s;
  }

  & p {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 140%);
    z-index: 10;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &.open {
    & span {
      background: rgba(16, 185, 129, 1);
    }

    & span:first-child {
      transform: translateX(100%);
    }

    & span:nth-child(2) {
      transform: translateX(-100%);
    }

    & p {
      animation: ${menu_text_animation} 0.5s forwards .1s;
    }
  }
`;
