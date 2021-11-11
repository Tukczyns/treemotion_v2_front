import { Link } from "react-router-dom";

const WorkoutListItem: React.FC = () => {
  return (
    <Link to="/panel/workouts/id">
      <div className="grid grid-cols-6 text-center py-6 bg-gray-900 hover:bg-gray-700 rounded-md my-2 cursor-pointer font-semibold">
        <div>05.11.2021</div>
        <div className="text-red-500">4.23km</div>
        <div className="text-blue-500">23min 12sek</div>
        <div className="text-yellow-400">7.23km/h</div>
        <div>126</div>
        <div>Nie</div>
      </div>
    </Link>
  );
};

export default WorkoutListItem;
