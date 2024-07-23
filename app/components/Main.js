"use client"; // por tener estado
import React, { useState } from "react";

const Main = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500">
      <div>
        <h1>Hello World!</h1>
        <div className="flex gap-5">
          <button onClick={() => decrease()}>-</button>
          <p>{value}</p>
          <button onClick={() => increase()}>+</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
