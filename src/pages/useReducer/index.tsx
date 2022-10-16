import Link from "next/link";

function UseReducer() {
  return (
    <div>
      <Link href="/useReducer/countReducer">count reducer</Link>
      <br />
      <Link href="/useReducer/todosReducer">todo reducer</Link>
    </div>
  );
}

export default UseReducer;
