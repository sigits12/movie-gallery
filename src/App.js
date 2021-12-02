import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./config/Router";

const App = () => {

  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container-fluid mt-3">
          <Switch>
            {routes.map((route, index) => (
              <Route exact={route.exact} path={route.path} key={index}>
                {route.component}
              </Route>
            ))}
          </Switch>
        </div>
      </main>
      <footer className="mastfoot fixed-bottom text-center">
        <p> Movie Gallery © {new Date().getFullYear()}</p>
      </footer>
    </Router>
  );
}

export default App;