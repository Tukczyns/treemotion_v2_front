import { RiMedalLine } from "react-icons/ri";
import { RiCalendarCheckLine } from "react-icons/ri";
import { FaRoute } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export enum EChallenge {
  DAILY = "DAILY",
  DISTANCE = "DISTANCE",
  TIME = "TIME",
}

interface IProps {
  finished: boolean;
  type: EChallenge;
}

const challengeIcon = (type: EChallenge) => {
  switch (type) {
    case EChallenge.DAILY:
      return <RiCalendarCheckLine />;
    case EChallenge.DISTANCE:
      return <FaRoute />;
    case EChallenge.TIME:
      return <FiClock />;
    default:
      return null;
  }
};

const Challenge: React.FC<IProps> = ({ finished, type }) => {
  return (
    <div
      className={`cursor-pointer shadow-xl border-gray-600 rounded-lg p-4 overflow-hidden py-5 bg-gray-900 hover:bg-gray-600 duration-200 flex items-center ${
        finished && "bg-opacity-50"
      }`}
    >
      <div className="w-14 h-14 flex-shrink-0 flex flex-col items-center justify-center text-white text-5xl">
        {challengeIcon(type)}
      </div>

      <div className="ml-4 text-white">
        <p className={`text-lg font-semibold ${finished && "text-opacity-50"}`}>
          Zdobądź 5 poziom i coś tam jeszcze{" "}
        </p>
        <div className="mt-1">
          <span className="text-green-500 text-xs whitespace-nowrap">
            Bierzesz udział
          </span>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mt-1">
            <div className="w-1/3 h-full bg-green-700" />
          </div>
          <div className="mt-1 w-full flex justify-between items-center">
            <span>0</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
