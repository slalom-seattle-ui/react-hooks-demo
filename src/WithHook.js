import React, {useState, useEffect} from 'react';
import './App.css';

function WithHook() {

  // Use destructuring to provide variable names to the array returned from useState
  // index 0 = the value to be managed
  // index 1 = function to modify the managed value
  const [count, increment] = useState(0);

  // Will be run every time the managed state is modified
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return(
    <div>
      <h1>Demo counter using hooks</h1>
      <p>Current count: {count}</p>
      {/* Pass the new value as the argument to increment (the update function) */}
      <button onClick={() => increment(count+1)}>Increment</button>
    </div>
  );
}

export default WithHook;