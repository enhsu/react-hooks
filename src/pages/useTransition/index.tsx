import { ChangeEvent, useState, useTransition } from "react";

type ListItem = string;

function UseTransition() {
  const [input, setInput] = useState<string>();
  const [list, setList] = useState<ListItem[]>([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    // Update `input` value
    // The `input` state is high priority, and it will render out immediately
    setInput(e.target.value);

    // Update `list` value
    startTransition(() => {
      // All of the state inside startTransition is going to be low priority
      // We only render the low priority state out if we have time
      // The low priority state will work in the background, while all the hieght priority stuff is still accessible
      const newList: ListItem[] = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={(e) => handleInputChange(e)} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}

export default UseTransition;
