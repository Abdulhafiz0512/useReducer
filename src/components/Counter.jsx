// Counter.js
import React, { useState } from 'react';

const Counter = ({ state, dispatch }) => {
  const [incrementValue, setIncrementValue] = useState(0);
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <input
        type="number"
        value={incrementValue}
        onChange={(e) => setIncrementValue(parseInt(e.target.value, 10) || 0)}
      />
      <input
        type="text"
        placeholder="Enter text color"
        value={textColor}
        onChange={(e) => setTextColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter background color"
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      />
      <button onClick={() => dispatch({ type: 'increment', payload: incrementValue })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: incrementValue })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'setColor', payload: textColor })}>
        Set Text Color
      </button>
      <button onClick={() => dispatch({ type: 'setBackground', payload: backgroundColor })}>
        Set Background Color
      </button>
    </div>
  );
};

export default Counter;
