import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface IProps {
  action: () => void;
}

export const FacebookButton: React.FC<IProps> = ({ action }) => {
  return (
    <button
      onClick={action}
      className="w-full bg-facebook pt-2 pb-2 text-center text-white shadow-2xl hover:bg-opacity-75 duration-200 min-w-max flex items-center relative"
    >
      <FaFacebookF className="text-2xl ml-1" />
      <span className="ml-2 font-medium  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        Dołącz z Facebookiem
      </span>
    </button>
  );
};

export const GoogleButton: React.FC<IProps> = ({ action }) => {
  return (
    <button
      onClick={action}
      className="w-full bg-white pt-2 pb-2 text-center shadow-2xl hover:bg-gray-300 duration-200 min-w-max text-black flex items-center relative"
    >
      <FcGoogle className="text-2xl ml-1" />
      <span className="ml-2 font-medium text-gray-600 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        Dołącz z Google
      </span>
    </button>
  );
};
