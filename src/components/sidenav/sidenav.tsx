import { BiHome, BiSearch } from "react-icons/bi";

import { FaRoute } from "react-icons/fa";
import { AiOutlineTrophy, AiOutlineSetting } from "react-icons/ai";
import { GiPodium } from "react-icons/gi";
import Hamburger from "./hamburger/hamburger";
import SidenavLink from './sidenav_link/sidenav_link'
import styled, { keyframes } from "styled-components";
interface IProps {
  menuOpen: boolean;
  toggleMenu: (arg: boolean) => void;
}

const SideNav: React.FC<IProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={`h-full duration-300 ${menuOpen ? "w-80" : "w-28"
        } bg-gray-900 py-20 pl-7`}
    >
      <div className="h-full flex flex-col justify-between items-start text-white">
        <div className="pl-2">
          <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <nav className="flex flex-col items-start">
          <SidenavLink
            route={"/panel/"}
            icon={<BiHome />}
            menuOpen={menuOpen}
            text="Strona główna"
          />
          <SidenavLink
            route={"/panel/workouts"}
            icon={<FaRoute />}
            menuOpen={menuOpen}
            text="Treningi"
          />
          <SidenavLink
            route={"/panel/rankings"}
            icon={<GiPodium />}
            menuOpen={menuOpen}
            text="Rankingi"
          />
          <SidenavLink
            route={"/panel/challenges"}
            icon={<AiOutlineTrophy />}
            menuOpen={menuOpen}
            text="Wyzwania i osiągnięcia"
          />
          <SidenavLink
            route={"/panel/search"}
            icon={<BiSearch />}
            menuOpen={menuOpen}
            text="Szukaj"
          />
        </nav>
        <div className="flex justify-center">
          <SidenavLink
            route="/panel/settings"
            icon={<AiOutlineSetting />}
            menuOpen={menuOpen}
            text="Ustawienia"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const navAnimation = keyframes`
  0%{
    width: 7rem;
  }
  100%{
    width: 20rem;
  }
`

const NavContainer = styled.div`

`