import { Dispatch } from "react";
import {
  deleteTodo,
  TodosAction,
  TodoState,
  toggleTodo,
} from "~/pages/useReducer/todosReducer";

type PropsType = {
  todo: TodoState;
  dispatch: Dispatch<TodosAction>;
};

function Todo(props: PropsType) {
  const { todo, dispatch } = props;

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <div>
      <p>
        Completed: {todo.complete ? "Y" : "N"} - {todo.todo}
      </p>
      <button onClick={() => handleToggle()}>Toggle</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
}

export default Todo;
