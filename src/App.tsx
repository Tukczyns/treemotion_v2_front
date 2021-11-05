import { Route, Switch } from "react-router";
import Nav from "./components/nav/nav";
import Panel from "./pages/panel/panel";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/home">
          <Panel />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
