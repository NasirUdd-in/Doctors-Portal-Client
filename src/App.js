import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Nasir from "./Pages/Nasir/Nasir";
import AppointmentBanner from "./Pages/Home/AppointmentBanner/AppointmentBanner";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <Nasir />
          </Route>
          <Route path="/appointment">
            <AppointmentBanner />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
