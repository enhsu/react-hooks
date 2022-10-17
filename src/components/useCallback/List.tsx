import { useEffect, useState } from "react";

type PropsType = {
  getItems: Function;
};
function List(props: PropsType) {
  const { getItems } = props;

  const [items, setItems] = useState<number[]>([]);
  useEffect(() => {
    setItems(getItems());
    // If we don't use `useCallback` in `getItems`, the useEffect will trigger while the theme changed, too
    console.log("Updating items");
  }, [getItems]);
  return (
    <>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}

export default List;
