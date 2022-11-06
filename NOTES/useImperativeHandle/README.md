# useImperativeHandle

[Go back to root README](/README.md)

## Description

useImperativeHandle customizes the instance value that is exposed to parent components when using ref

useImperativeHandle should be used with forwardRef

- [Reference: useimperativehandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)

## Syntax

```typescript
useImperativeHandle(ref, createHandle, [deps]);
```

In child component, remember to use `React.forwardRef(component)`

e.g.

```tsx
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle
} from 'react';

type CreateHandle = {};
type PropsType = {};

const ChildComponent: ForwardRefRenderFunction<CreateHandle, PropsType> = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      const handle: CreateHandle = {};
      return handle;
    ),
    []
  );

  return React.ReactNode;
};

export default forwardRef(ChildComponent);
```

## Implement

- Basic example
  - [Parent component](./../../src/pages/useImperativeHandle/basic-example.tsx)
  - [Child component](./../../src/components/useImperativeHandle/CustomInput.tsx)
- Real world example
  - [Parent component](./../../src/pages/useImperativeHandle/real-world-example.tsx)
  - [Child component](./../../src/components/useImperativeHandle/ConfirmationModal.tsx)

[Go back to root README](/README.md)
