import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import NoHook from './NoHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nohook">Counter, using state</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/nohook" component={NoHook}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
