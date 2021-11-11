import Avatar from "../avatar/avatar";
import IconLink from "../icon_link/icon_link";

import { RiUser3Line } from "react-icons/ri";

const Friend: React.FC = () => {
  return (
    <div className="flex justify-between items-center my-3 text-white">
      <div className="flex items-center">
        <Avatar url="" />
        <div className="ml-4">
          <p className="text-lg">Username</p>
          <p className="text-sm">Lvl. 21</p>
        </div>
      </div>
      <div>
        <div>
          <IconLink icon={<RiUser3Line />} link="" />
        </div>
      </div>
    </div>
  );
};

export default Friend;
