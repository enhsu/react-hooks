# useEffect

[Go back to root README](/README.md)

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

See implement [here](/src/pages/useEffect/index.tsx)

And also with [event listener example](/src/pages/useEffect/withEvent.tsx)

[Go back to root README](/README.md)
