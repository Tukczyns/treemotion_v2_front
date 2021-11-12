import { BiHome, BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import { FaRoute } from "react-icons/fa";
import { AiOutlineTrophy, AiOutlineSetting } from "react-icons/ai";
import { GiPodium } from "react-icons/gi";
import { ReactElement, useState } from "react";
import Hamburger from "./hamburger/hamburger";

interface IProps {
  menuOpen: boolean;
  toggleMenu: (arg: boolean) => void;
}

const SideNav: React.FC<IProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={`h-full duration-300 ${
        menuOpen ? "w-80" : "w-28"
      } bg-gray-900 py-20 pl-7`}
    >
      <div className="h-full flex flex-col justify-between items-start text-white">
        <div className="pl-2">
          <Hamburger menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
        <nav className="flex flex-col items-start">
          <Link
            route={"/panel/"}
            icon={<BiHome />}
            menuOpen={menuOpen}
            text="Strona główna"
          />
          <Link
            route={"/panel/workouts"}
            icon={<FaRoute />}
            menuOpen={menuOpen}
            text="Treningi"
          />
          <Link
            route={"/panel/rankings"}
            icon={<GiPodium />}
            menuOpen={menuOpen}
            text="Rankingi"
          />
          <Link
            route={"/panel/challenges"}
            icon={<AiOutlineTrophy />}
            menuOpen={menuOpen}
            text="Wyzwania i osiągnięcia"
          />
          <Link
            route={"/panel/search"}
            icon={<BiSearch />}
            menuOpen={menuOpen}
            text="Szukaj"
          />
        </nav>
        <div className="flex justify-center">
          <Link
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

const Link: React.FC<{
  text: string;
  route: string;
  icon: ReactElement;
  menuOpen: boolean;
}> = ({ text, route, icon, menuOpen }) => {
  return (
    <NavLink
      to={route}
      className={(navData) =>
        "block my-3 text-3xl p-3 rounded-sm hover:bg-green-700 duration-200 " +
        (navData.isActive ? "bg-green-700" : "")
      }
    >
      <div className="flex items-center justify-start">
        {icon}
        <div
          className={`text-lg max-w-0 overflow-hidden duration-200 ${
            menuOpen && "max-w-xl"
          }`}
        >
          <p className="min-w-max pl-5">{text}</p>
        </div>
      </div>
    </NavLink>
  );
};
