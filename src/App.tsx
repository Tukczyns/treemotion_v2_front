import Panel from "./pages/panel/panel";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Workouts from "./components/workouts/workouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/panel/*" element={<Panel />}>
          <Route path="" element={<Dashboard />} />
          <Route path="workouts" element={<Workouts />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
