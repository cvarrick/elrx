import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Body {count}</p>
      <button onClick={inc}>Inc</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Test;
