import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
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
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
