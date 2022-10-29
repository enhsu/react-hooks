import { ReactElement, useDeferredValue, useEffect, useMemo } from "react";

type PropsType = {
  input: string;
};

type ListItem = ReactElement;

const LIST_SIZE = 20000;

function List({ input }: PropsType) {
  const defferedInput = useDeferredValue<string>(input);
  const list = useMemo(() => {
    const newList: ListItem[] = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      newList.push(<div key={i}>{defferedInput}</div>);
    }
    return newList;
  }, [defferedInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDefferedInput: ${defferedInput}`);
  }, [input, defferedInput]);

  return <>{list}</>;
}

export default List;
