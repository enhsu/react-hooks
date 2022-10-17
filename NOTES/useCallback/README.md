# useCallback

[Go back to root README](/README.md)

Returns a memoized callback function.

It's similar to [useMemo](./../useMemo/README.md)

1. It just like `useMemo`, it not going to rerun the code inside of it unless certain parameters change
1. One big different between `useMemo` and `useCallback` is that
   - useMemo: it takes a function and it's going to return to you the return value of that function
   - useCallback: it takes a function but it's actually what the useCallback returns

syntax

```tsx
import { useCallback, useState } from "react";

function App() {
  const [state, setState] = useState<string>();
  const someFunction = useCallback(() => {
    return [`original ${state}`, `new ${state}`];
  }, [state]);

  return (
    <div>
      <ChildComponent someFunction={someFunction} />
    </div>
  );
}

export default App;
```
