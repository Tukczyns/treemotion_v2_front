import LastWorkout from "../../../components/last_workout/last_workout";
import PageTitleBar from "../../../components/page_title_bar/page_title_bar";

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full">
      <PageTitleBar title="Dashboard" />
      <div className="grid grid-cols-2 mt-5 gap-8">
        <LastWorkout />
        <div className=" h-80 bg-gray-900 rounded-xl"></div>
        <div className="h-80 bg-gray-900 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Dashboard;
