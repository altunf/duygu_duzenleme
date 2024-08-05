import React from "react";

export const Exercises = () => {
  let x: any = [];

  for (let i = 1; i < 11; i++) {
    x.push(i);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>Egzersizler</h3>
      <div>
        {x.map((el: any, index: number) => {
          return <div key={index}>Exercise {el}</div>;
        })}
      </div>
    </main>
  );
};
