import React, { useState, useCallback } from 'react';

function Callback() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}

function ChildComponent({ onIncrement }) {
  return (
    <div>
      <button className="bg-blue-400"onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Callback;