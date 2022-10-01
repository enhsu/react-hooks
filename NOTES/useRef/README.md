# useRef

[Go back to root README](/README.md)

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

[Go back to root README](/README.md)
