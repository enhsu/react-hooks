# useTransition

[Go back to root README](/README.md)

## Description

Returns a stateful value for the pending state of the transition, and a function to start it.

## When to use it?

- Time intensive computation and it's happening really often. And the app will be sluggish
- The low priority state will work in the background, while the hight priority state is still accessible
- Only use when we absolutely need it. It will let app do more renders than normal

## Syntax

```tsx
import { useTransition } from "react";

function App() {
  const [isPending, startTransition] = useTransition();

  // Using startTransition makes UI render twice
  // One for setHighState
  // The other for setLowState
  useEffect(() => {
    setHighState(highPriorityState);
    startTransition(() => {
      setLowState(lowPriorityState);
    });
  }, [highPriorityState, lowPriorityState]);

  return (
    <>
      <SomeComponents />
    </>
  );
}

export default App;
```

## Implement

- [Demo: useTransition](./../../src/pages/useTransition/index.tsx)

[Go back to root README](/README.md)
