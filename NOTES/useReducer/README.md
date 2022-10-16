# useReducer

[Go back to root README](/README.md)

syntax

```typescript
// Define actions
enum Actions {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}
```

```typescript
// Define reducer function
interface CountState {
  count: number;
}

interface CountAction {
  type: Actions;
  payload: number;
}

// reducerFunction(state, action)
// `action` would pass into `dispatch`
/// whenever we call dispatch, the reducer should retun an updated state
function reducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case Actions.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case Actions.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}
```

```typescript
// InitialArg
interface InitialStateType {
  count: number;
}
const initialState: InitialStateType = {
  count: 0,
};
```

```tsx
// useReducer
import { useReducer } from "react";

function App() {
  // Initialize
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment5() {
    dispatch({
      type: Actions.INCREASE,
      payload: 5,
    });
  }

  return (
    <div>
      Count: {state.count}
      <button onClick={() => increment5()}>Add</button>
    </div>
  );
}

export default App;
```

---

## More implement code

- [todo list](./../../src/pages/useReducer/todosReducer.tsx)
