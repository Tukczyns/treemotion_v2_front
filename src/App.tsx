import Panel from "./pages/panel/panel";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/panel/dashboard/dashboard";
import Workouts from "./pages/panel/workouts/workouts";
import WorkoutDetail from "./pages/panel/workout_detail/workout_detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/panel/*" element={<Panel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="workouts/:id" element={<WorkoutDetail />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
