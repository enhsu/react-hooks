# useMemo

[Go back to root README](/README.md)

Returns a memoized value.

Purpose used in

1. Improve performence when we have a `very slow function` while render
1. Referential equality, like two object is the same

syntax

```typescript
// Improve performence
import { useState, useEffect, useMemo } from "react";

const [number, setNumber] = useState<number>(0);
// Only execute slowFunction while number is changed
const value = useMemo(() => slowFunction(number), [number]);
```

```typescript
// Compare object
const [isDark, setIsDark] = useState<boolean>(false);
const themeStyles = useMemo(
  () => ({
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
  }),
  [isDark]
);
// Only render while `themeStyles` actually change
useEffect(() => {
  console.log("Theme changed");
}, [themeStyles]);
```

NOTE: Don't use useMemo everywhere, because it does give you some performance overhaed and some memory overhead

See implement [here](/src/pages/useMemo/index.tsx)

[Go back to root README](/README.md)
