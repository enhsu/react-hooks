import { ChangeEvent, useState } from "react";
import List from "~/components/useDefferedValue/List";

function UseDefferedValue() {
  const [input, setInput] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      <List input={input} />
    </>
  );
}

export default UseDefferedValue;
