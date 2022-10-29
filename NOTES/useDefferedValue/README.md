# useDefferedValue

[Go back to root README](/README.md)

## Description

useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates.

It's similar to debounce or throttling

React will work on the update as soon as other work finishes

## Syntax

```tsx
import { useDefferedValue, useMemo } from "react";

type PropsType = {
  input: string;
};

const LIST_SIZE = 20000;

function ChildComponent({ input }: PropsType) {
  const defferedInput = useDefferedValue<string>(input);
  const list = useMemo(() => {
    const newList: ListItem[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(<div key={i}>{defferedInput}</div>);
    }
    return newList;
  }, [defferedInput]);

  return <>{list}</>;
}

export default ChildComponent;
```

## Implement

- [Demo: useDefferedValue parent component](./../../src/pages/useDefferedValue/index.tsx)
- [Demo: useDefferedValue](./../../src/components/useDefferedValue/List.tsx)

[Go back to root README](/README.md)
