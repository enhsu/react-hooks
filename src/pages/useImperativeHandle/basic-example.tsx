import { ChangeEvent, useRef, useState } from "react";
import CustomInput from "~/components/useImperativeHandle/CustomInput";
import type { CustomInputHandle } from "~/components/useImperativeHandle/CustomInput";

function BasicExample() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<CustomInputHandle>(null);

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
      <br />
      <button onClick={() => inputRef.current?.alertHi()}>Focus</button>
      <p>input value: {value}</p>
    </>
  );
}

export default BasicExample;
