import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch> */}

        <Switch>
          <Switch>
            <Route path="/appointment">
              <Appointment />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
