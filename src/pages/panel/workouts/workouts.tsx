import PageTitleBar from "../../../components/page_title_bar/page_title_bar";
import WorkoutListItem from "../../../components/workout_list_item/workout_list_item";

const Workouts: React.FC = () => {
  return (
    <div className="w-full h-full ">
      <PageTitleBar title="Treningi" />
      <div className="text-white mt-8">
        <div className="grid grid-cols-6 text-center text-gray-400 text-sm">
          <div>Data</div>
          <div>Dystans</div>
          <div>Czas</div>
          <div>Średnia prędkość</div>
          <div>Doświadczenie</div>
          <div>Prywatne</div>
        </div>
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
        <WorkoutListItem />
      </div>
    </div>
  );
};

export default Workouts;
