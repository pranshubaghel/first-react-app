import React, { useMemo, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  // Memoized computation
  const memoizedValue = useMemo(() => {
    // Costly computation
    console.log('Performing computation...');
    let result = 0;
    for (let i = 0; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]); // Recalculate only when count changes
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

export default MyComponent;
