import React from 'react';
import './App.css';

/*
 * A react component that provides a counter using explicit state management.
 * Note that this cannot be a functional component because of the explicit state.
 */
class NoHook extends React.Component {

  constructor(props) {
    super();
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Demo counter using state</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default NoHook;