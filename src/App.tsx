import Panel from "./pages/panel/panel";
import Homepage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/panel/*" element={<Panel />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
