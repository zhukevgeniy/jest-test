import React, { useCallback } from "react";
import { Counter } from "./Counter";
import { Section } from "./Section";

export function App() {
  const handleMount = useCallback((el: HTMLDivElement) => {
    console.log({ el });
  }, []);

  return (
    <>
      <Counter />
      <Section onMount={handleMount} />
    </>
  );
}
