import Panel from "./pages/panel/panel";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/panel/dashboard/dashboard";
import Workouts from "./pages/panel/workouts/workouts";
import WorkoutDetail from "./pages/panel/workout_detail/workout_detail";
import ChallengesAndAchievements from "./pages/panel/challenges_and_achievements/challenges_and_achievements";
import PageNotFound from "./pages/404/404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/panel/*" element={<Panel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="challenges" element={<ChallengesAndAchievements />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="workouts/:id" element={<WorkoutDetail />} />
        </Route>
        <Route path="/login" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
