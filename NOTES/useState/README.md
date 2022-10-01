# useState

[Go back to root README](/README.md)

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

See code implement [here](/src/pages/useState/index.tsx)

[Go back to root README](/README.md)
