import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const SidenavLink: React.FC<{
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
                    className={`text-lg max-w-0 overflow-hidden duration-200 ${menuOpen && "max-w-xl"
                        }`}
                >
                    <p className="min-w-max pl-5">{text}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default SidenavLink