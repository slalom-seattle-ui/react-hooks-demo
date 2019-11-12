import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import NoHook from './NoHook';
import WithHook from './WithHook';
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
            <li>
              <Link to="/withhook">Counter with Hooks</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/nohook" component={NoHook}/>
          <Route exact path="/withhook" component={WithHook}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
