# This is a project introduce react hooks

## Navigation

- [useState](#usestate)
- [useEffect](#useeffect)
- [useMemo](#usememo)

## About hooks

1. We can only use hooks inside the functional component, it can not be inside a class component
1. Hooks can't be called conditionally

---

## useState

Returns a stateful value, and a function to update it.

syntax, for a number

```typescript
import { useStaet } from "react";

const initialState: number = 42;
// useState<number>(initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>]
const [value, setValue] = useState<number>(initialState);
```

Implement `useState` react code, see [here](./src/pages/useState/index.tsx)

1. `useState(() => initialFunction())`, it can make sure the value only render once when the component renders
1. `const [state, setState] = useState({})`, the `setState` is not merging an object, it'll overriding all of the old state

See implement [here](./src/pages/useState/index.tsx)

[Go back to navigation](#navigation)

---

## useEffect

Handle React life cycle

syntax

```typescript
enum State = {
  RED,
  GREEN,
  YELLO
}

import { useState, useEffect } from 'react';
// useEffect(effect: EffectCallback, deps?: DependencyList | undefined): void
const [state, setState] = useState(State.RED);

useEffect(() => {
  console.log('render every time when the component is rendered');

  return () => {
    console.log('render when the component is unmounted')
  }
})

useEffect(() => {
  console.log('render only the first time when the component is rendered');
}, [])

useEffect(() => {
  console.log('render only when state change');
}, [state]);
```

See implement [here](./src/pages/useEffect/index.tsx)

And also with [event listener example](./src/pages/useEffect/withEvent.tsx)

[Go back to navigation](#navigation)

---

## useMemo

Returns a memoized value.

Purpose used in

1. Improve performence when we have a `very slow function` while render
1. Referential equality, like two object is the same

syntax

```typescript
import { useState, useEffect, useMemo } from "react";

const [number, setNumber] = useState<number>(0);
// Only execute slowFunction while number is changed
const value = useMemo(() => slowFunction(number), [number]);

const [isDark, setIsDark] = useState<boolean>(false);
// Compare object
const themeStyles = useMemo(() => ({
  backgroundColor: isDark ? "black" : "white",
  color: isDark ? "white" : "black",
}));
```

NOTE: Don't use useMemo everywhere, because it does give you some performance overhaed and some memory overhead

See implement [here](./src/pages/useMemo/index.tsx)

[Go back to navigation](#navigation)
