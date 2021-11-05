import { IoIosArrowDown } from "react-icons/io";

import pl_flag from "../../images/polish_flag.png";

const Nav: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <div className="w-14 h-14 bg-white"></div>
        </div>
        <div className="flex items-center cursor-pointer">
          <img src={pl_flag} alt="polish" />
          <IoIosArrowDown className="text-white text-2xl ml-1" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
