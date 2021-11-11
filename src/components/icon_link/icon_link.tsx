import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface IProps {
  icon: ReactElement;
  link: string;
}

const IconLink: React.FC<IProps> = ({ icon, link }) => {
  return (
    <Link to="/" className="block p-3 bg-gray-800 text-white text-2xl rounded-md hover:bg-gray-700 duration-200">
      {icon}
    </Link>
  );
};

export default IconLink;
