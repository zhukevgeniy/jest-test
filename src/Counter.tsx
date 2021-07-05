import React, { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter, setCounter]);

  return (
    <div>
      Counter: <span>{counter}</span>
    </div>
  );
}
