import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { routes } from "./config/Router";

import Detail from "./components/Detail";
import Dashboard from "./components/Dashboard";

const App = () => {

  return (
    <Router>
      <div className="container-fluid movie-list">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <Navbar />
        </div>
        <div className="row">
          <Switch>
              <Route exact={true} path="/">
                <Dashboard />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;