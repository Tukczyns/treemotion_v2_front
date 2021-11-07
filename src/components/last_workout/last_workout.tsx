import { FaRoute } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsSpeedometer2 } from "react-icons/bs";
import ButtonPrimary from "../utils/buttons/buttons";

const LastWorkout: React.FC = () => {
  return (
    <div className="col-span-2 h-96 bg-gray-900 rounded-xl p-10">
      <p className="text-gray-400 text-lg">Ostatni trening</p>
      <p className="text-3xl text-white font-semibold mt-4">
        Dobra robota wariacie!
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4">
        <div className="border border-gray-600 rounded-lg p-4 flex">
          <div className="p-4 bg-red-600 rounded-lg text-white text-3xl">
            <FaRoute />
          </div>
          <div className="ml-5">
            <p className="text-3xl text-red-600 font-bold">15.42km</p>
            <p className="text-lg text-white font-regular">Dystans</p>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg p-4 flex">
          <div className="p-4 bg-yellow-500 rounded-lg text-white text-3xl">
            <BsSpeedometer2 />
          </div>
          <div className="ml-5">
            <p className="text-3xl text-yellow-500 font-bold">10.42km/h</p>
            <p className="text-lg text-white font-regular">Śr. prędkość</p>
          </div>
        </div>
        <div className="border border-gray-600 rounded-lg p-4 flex">
          <div className="p-4 bg-blue-500 rounded-lg text-white text-3xl">
            <FiClock />
          </div>
          <div className="ml-5">
            <p className="text-3xl text-gray-200 font-bold">1h 2min</p>
            <p className="text-lg text-white font-regular">Czas</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex">
          <ButtonPrimary text="Szczegóły" type="button" />
          <div className="ml-3">
            <ButtonPrimary text="Udostępnij" type="button" rank="secondary" />
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-lg">2 dni temu</p>
        </div>
      </div>
    </div>
  );
};

export default LastWorkout;
