import { useReducer } from "react";

enum Actions {
  INCREASE,
  DECREASE,
}

interface CountAction {
  type: Actions;
  payload: number;
}

interface CountState {
  count: number;
}

const countInitialState: CountState = { count: 0 };

function countReducer(state: CountState, action: CountAction) {
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

function UseReducer() {
  const [state, dispatch] = useReducer(countReducer, countInitialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: Actions.INCREASE, payload: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: Actions.DECREASE, payload: 1 })}>
        Minus 1
      </button>
    </div>
  );
}

export default UseReducer;
