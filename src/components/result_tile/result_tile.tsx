import { ReactElement } from "react";
import { FaRoute } from "react-icons/fa";

export enum ETile {
  DISTANCE = "red-600",
  AVG_SPEED = "yellow-400",
  TIME = "blue-500",
  KCAL = "yellow-700",
  MAX = "indigo-600",
  MIN = "pink-500",
}

interface IProps {
  type: ETile;
  icon: ReactElement;
  value: string;
  title: string;
}

const ResultTile: React.FC<IProps> = ({ type, icon, value, title }) => {
  return (
    <div>
      <div className="border border-gray-600 rounded-lg p-4 flex">
        <div className={`p-4 bg-${type} rounded-lg text-white text-3xl`}>
          {icon}
        </div>
        <div className="ml-5">
          <p className={`text-3xl text-${type} font-bold`}>{value}</p>
          <p className="text-lg text-white font-regular">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultTile;
