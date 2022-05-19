import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Nasir from "./Pages/Nasir/Nasir";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
