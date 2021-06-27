import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GuiderProfile from "./Pages/GuiderProfile";
import Home from "./Pages/Home/Home";
import TravelerProfile from "./Pages/TravelerProfile";
import GlobalStyles from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/traveler-profile">
            <TravelerProfile />
          </Route>
          <Route path="/guider-profile">
            <GuiderProfile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
