import React, { FunctionComponent, useState } from 'react';

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ height: 150, width: 150, background: 'hotpink', textAlign: 'center' }}>
      <h1>{count}</h1>
      <div>
        <button style={{ fontSize: 50 }} onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button style={{ fontSize: 50 }} onClick={() => setCount((c) => c - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
