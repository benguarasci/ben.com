import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Nav, Home, Projects, Resume } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={() => <Home />} />
        <Route path="/projects" exact component={() => <Projects />} />
        <Route path="/resume" exact component={() => <Resume />} />

      </div>
    </Router>
  );
}

// const home = () => (
//   <div>
//     <h1>homepage</h1>
//   </div>
// );

export default App;
