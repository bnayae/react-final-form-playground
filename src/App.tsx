// credit: https://github.com/final-form/react-final-form
//         https://www.youtube.com/watch?v=fxEW4jgoX-4&t=1927s

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicSample from "./components/BasicSample";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basic-sample">Basic Sample</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={BasicSample} />
        <Route path="/basic-sample" component={BasicSample} />
      </div>
    </Router>
  );
};

export default App;
