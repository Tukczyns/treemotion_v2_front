import { ReactElement } from "react";
import { FiClock } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { RiMedalLine } from "react-icons/ri";

export enum ETile {
  DISTANCE = "red-600",
  AVG_SPEED = "yellow-400",
  TIME = "blue-500",
  KCAL = "yellow-700",
  MAX = "indigo-600",
  MIN = "pink-500",
  EXP = "pink-500",
}

interface IProps {
  type: ETile;
  icon?: ReactElement;
  value: string;
  title: string;
  small?: boolean;
}

const switchIcon = (type: ETile) => {
  switch (type) {
    case ETile.DISTANCE:
      return <FaRoute />
    case ETile.AVG_SPEED:
      return <BsSpeedometer2 />
    case ETile.TIME:
      return <FiClock />
    case ETile.KCAL:
      return <AiOutlineFire />
    case ETile.MAX:
      return <BsSpeedometer2 />
    case ETile.MIN:
      return <BsSpeedometer2 />
    case ETile.EXP:
      return <RiMedalLine />
    default:
      return <FaRoute />
  }
}

const ResultTile: React.FC<IProps> = ({ type, icon, value, title, small }) => {
  return (
    <div>
      <div className="border border-gray-600 rounded-lg p-4 flex items-start">
        <div className={`bg-${type} rounded-lg text-white ${small ? 'p-3 text-2xl' : 'p-4 text-3xl'}`}>
          {icon ? icon : switchIcon(type)}
        </div>
        <div className="ml-5">
          <p className={`${small ? 'text-2xl' : 'text-3xl'} text-${type} font-bold`}>{value}</p>
          <p className={`${small ? 'text-sm' : 'text-lg'} text-white font-regular`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultTile;
