import React, { useState, useEffect } from 'react';

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button className="bg-blue-400" onClick={handleClick}>Increment</button>
    </div>
  );
}
export default Effect;
