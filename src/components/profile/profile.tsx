import { MdOutlineNotifications } from "react-icons/md";
import Lvl from "./lvl/lvl";

const Profile: React.FC = () => {
  return (
    <div className="h-full w-full p-16">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden">
            <img
              src="https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png"
              alt="profile pic"
              className="object-cover h-full w-full"
            />
          </div>
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
    </div>
  );
};

export default Profile;
