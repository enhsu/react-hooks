import { useState } from "react";

function countInitial3() {
  console.log("render val3");
  return 3;
}

function countInitial4() {
  console.log("render val4");
  return 4;
}

function UseState() {
  // The number `42` will get called every single time we run our function, while it's hard-coded value that doesn't matter
  // But if we use more complex value which need to calculate, it matter
  const [val, setVal] = useState(1);
  // Improve performance, use function return value
  const [val2, setVal2] = useState(() => {
    // It runs this function only the very first time the component renders
    // `render val2` will only getting run on console every single time when we actually first render the component
    console.log("render val2");
    return 2;
  });
  // It will run every time our component renders
  const [val3, setVal3] = useState(countInitial3);
  // To fix it, we can add an arrow function in it, then it will only render once
  const [val4, setVal4] = useState(() => countInitial4());

  // Actually, useState is designed for `Primitive value`, if we want to store `Reference value`, we should use multiple useState for each value
  // If we want to store object or array in useState, remember while we `setValue`, it will override all the value, not merge them
  const [obj, setObj] = useState(() => ({
    count1: 42,
    count2: 1,
  }));

  function decrementCount() {
    setVal((previousVal) => previousVal - 1);
    setVal2((previousVal) => previousVal - 1);
    setVal3((previousVal) => previousVal - 1);
    setVal4((previousVal) => previousVal - 1);
  }

  function incrementCount() {
    setVal((previousVal) => previousVal + 1);
    setVal2((previousVal) => previousVal + 1);
    setVal3((previousVal) => previousVal + 1);
    setVal4((previousVal) => previousVal + 1);
  }

  return (
    <>
      {/* Update number */}
      <div>
        <button onClick={() => decrementCount()}>-</button>
        <span>{val}</span>
        <span>{val2}</span>
        <span>{val3}</span>
        <span>{val4}</span>
        <button onClick={() => incrementCount()}>+</button>
      </div>
      {/* Update object */}
      <div>
        <button
          onClick={() =>
            setObj((prev) => ({ ...prev, count1: prev.count1 + 1 }))
          }
        >
          increase count1
        </button>
        <span>{obj.count1}</span>
        <button
          onClick={() =>
            setObj((prev) => ({ ...prev, count1: prev.count1 - 1 }))
          }
        >
          decrease count1
        </button>
        <br />
        <button
          onClick={() =>
            setObj((prev) => ({ ...prev, count2: prev.count2 + 1 }))
          }
        >
          increase count2
        </button>
        <span>{obj.count2}</span>
        <button
          onClick={() =>
            setObj((prev) => ({ ...prev, count2: prev.count2 - 1 }))
          }
        >
          decrease count2
        </button>
      </div>
    </>
  );
}

export default UseState;
