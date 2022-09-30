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

---

## useRef

`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument.
The returned object will persist for the full lifetime of the component.

IMPORTANT: in functional component, we need `useRef` in order to persist a value between renders if we're not using state.

```typescript
import { useRef } from "react";

const refValue = useRef<number>(0);
// refValue = { current: 0 };
```

What can we do with `useRef`?

1. Store the previous value, and persists between different renders, and it doesn't cause the component to re-render like state does

   - Why not `useState`?

     ```typescript
     import { useState, useEffect } from "react";

     export default function App() {
       const [renderCount, setRenderCount] = useState<number>(0);
       // It will cause an infinity loop, when the state is updated, the component will rerender again
       useEffect(() => {
         setRenderCount((prevCount) => prevCount + 1);
       });

       return <>...</>;
     }
     ```

   - Instead, we can use `useRef`

     ```typescript
     import { useRef, useEffect } from "react";

     export default function App() {
       // useRef is completely separate from our component render cycle
       const renderCount = useRef<number>(0);
       useEffect(() => {
         renderCount.current = renderCount.current + 1;
       });

       return <>...</>;
     }
     ```

1. Reference elements inside of the HTML

   NOTE: Just let React manage all your state, all the values and all the onChanges, don't use `useRef` to change the value in the HTML which is binding with the hooks.

   ```typescript
   import { useRef } from "react";

   export default function App() {
     const inputRef = useRef<HTMLInputElement>(null);

     return (
       <>
         <input ref={inputRef} />
         <button onClick={() => inputRef.current?.focus()}>Focus</button>
       </>
     );
   }
   ```

1. Store previous state value
   Based on `useRef` will return object that persist for the full lifetime of the component

   ```typescript
   import { useRef, useState, useEffect } from "react";

   export default function App() {
     const [name, setName] = useState<string>("");
     const previousName = useRef<string>("");

     useEffect(() => {
       previousName = name;
     }, [name]);

     return (
       <>
         <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         <div>
           My name is {name}, and used to be {previousName.current}
         </div>
       </>
     );
   }
   ```
