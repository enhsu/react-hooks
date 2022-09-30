import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousName = useRef<string>("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input
        className=" focus:border-red-500 border"
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      {/* Show previous name */}
      <div>And I used to be {previousName.current}</div>
      {/* Show render times by useRef */}
      <div>I rendered {renderCount.current} times</div>
      {/* Make input element focus while click button */}
      <button onClick={() => inputRef.current?.focus()}>
        Make input focus
      </button>
    </>
  );
}

export default UseRef;
