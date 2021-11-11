import { MdOutlineNotifications } from "react-icons/md";
import Avatar from "../avatar/avatar";
import Friends from "./friends/friends";
import Lvl from "./lvl/lvl";

const Profile: React.FC = () => {
  return (
    <div className="h-full w-full p-16">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <Avatar url="" />
          <span className="text-white text-lg ml-4">Nazwa użytkownika</span>
        </div>
        <button className="bg-gray-800 text-white p-2">
          <div className="relative text-3xl">
            <MdOutlineNotifications />
            <div className="absolute right-1 top-0 bg-red-400 w-2 h-2 rounded-full"></div>
          </div>
        </button>
      </div>
      <Lvl />
      <Friends />
    </div>
  );
};

export default Profile;
