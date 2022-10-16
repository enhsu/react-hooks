import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import Todo from "~/components/useReducer/Todo";

export enum ACTIONS {
  ADD_TODO = "add-todo",
  TOGGLE_TODO = "toggle-todo",
  DELETE_TODO = "delete-todo",
}

export function addTodo(payload: { todo: string }): ADDACTION {
  return {
    type: ACTIONS.ADD_TODO,
    payload,
  };
}

export function toggleTodo(payload: { id: string }): TOGGLEACTION {
  return {
    type: ACTIONS.TOGGLE_TODO,
    payload,
  };
}

export function deleteTodo(payload: { id: string }): DELETEACTION {
  return {
    type: ACTIONS.DELETE_TODO,
    payload,
  };
}

export interface TodoState {
  id: string;
  todo: string;
  complete: boolean;
}

interface ADDACTION {
  type: ACTIONS.ADD_TODO;
  payload: { todo: string };
}

interface TOGGLEACTION {
  type: ACTIONS.TOGGLE_TODO;
  payload: { id: string };
}

interface DELETEACTION {
  type: ACTIONS.DELETE_TODO;
  payload: { id: string };
}

export type TodosAction = ADDACTION | TOGGLEACTION | DELETEACTION;

function reducer(state: TodoState[], action: TodosAction) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.todo)];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}

function newTodo(todo: string) {
  return {
    id: Date.now().toString(),
    todo,
    complete: false,
  };
}

const initialState: TodoState[] = [];

function TodosReducer() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState<string>("");

  function handleTodoOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTodo({ todo: todo }));
    setTodo("");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => handleTodoOnChange(e)}
        />
      </form>
      {todos.length !== 0 &&
        todos.map((item) => (
          <Todo key={item.id} todo={item} dispatch={dispatch} />
        ))}
    </>
  );
}

export default TodosReducer;
