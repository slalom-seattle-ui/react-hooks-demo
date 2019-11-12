import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
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
          </ul>
          <Route exact path="/" component={Home}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
