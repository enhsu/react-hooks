import { useEffect, useMemo, useState } from "react";

// When we update the value in React, it'll rerender the entire component
// If we don't use useMemo, the whole function component will run from top to bottom, it includes the slowFunction
function UseMemo() {
  const [number, setNumber] = useState<number>(() => 0);
  const [isDark, setIsDark] = useState<boolean>(() => false);
  // Get a double by the sloFunction, it'll take a long time
  // We use useMemo here, it'll cache the value, so we don't have to calculate the value every single time
  // Then we only have to execute the slowFunction when we update the number
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  const themeStyles = useMemo(
    () => ({
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
    }),
    [isDark]
  );

  useEffect(() => {
    // Without useMemo, the console.log() will ececute every time no matter the themStyles is change or not
    // Because it's referential equality

    // With useMemo, the console.log() only execute when the theme is actually change
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setIsDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

export default UseMemo;

function slowFunction(n: number): number {
  console.log("Calling slow function...");
  for (let i = 0; i < 10 ** 9; i++) {}

  return n * 2;
}
