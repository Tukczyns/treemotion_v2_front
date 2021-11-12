import { RiMedalLine } from "react-icons/ri";

interface IProps {
  completed: boolean;
}

const Achievement: React.FC<IProps> = ({ completed }) => {
  return (
    <div
      className={`shadow-xl border-gray-600 rounded-lg p-4 overflow-hidden py-5 bg-gray-900 flex items-center ${
        !completed && "bg-opacity-50"
      }`}
    >
      <div className="w-14 h-14 flex-shrink-0 flex flex-col items-center justify-center">
        <RiMedalLine
          className={`text-yellow-300 text-4xl ${
            !completed && "text-opacity-40"
          }`}
        />
        <p className="text-yellow-300 font-semibold text-xs mt-1 transform -translate-x-px">+160</p>
      </div>
      <p
        className={`text-lg text-white font-semibold ml-4 ${
          !completed && "text-opacity-50"
        }`}
      >
        Zdobądź 5 poziom i coś tam jeszcze
      </p>
    </div>
  );
};

export default Achievement;
