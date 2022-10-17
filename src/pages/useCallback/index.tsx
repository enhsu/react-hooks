import { useCallback, useState } from "react";
import List from "~/components/useCallback/List";

function UseCallback() {
  const [number, setNumber] = useState<number>(1);
  const [isDark, setIsDark] = useState<boolean>(false);

  // We assume `getItem` function is a function which call API and return some result
  // If we don't use `useCallback`, the `getItem` function will recreate every single time while the component re-render
  // And since it's been recreated, and it pass to the `List` component, it will be a new function while the `UseCallback component` rerender
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setIsDark((prev) => !prev)}>Toggle theme</button>
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
