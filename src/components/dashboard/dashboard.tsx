import LastWorkout from "../last_workout/last_workout";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center text-white">
        <p className="text-xl font-semibold">Dashboard</p>
        <p className="font-thin text-sm">
          Dziś jest <span className="font-bold">6 listopada 2021r.</span>
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <LastWorkout />
        <div className=" h-80 bg-gray-900 rounded-xl"></div>
        <div className="h-80 bg-gray-900 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;
