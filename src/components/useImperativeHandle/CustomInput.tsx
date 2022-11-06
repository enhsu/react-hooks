import React, {
  forwardRef,
  useImperativeHandle,
  ChangeEvent,
  ForwardRefRenderFunction,
} from "react";

type PropsType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type CustomInputHandle = {
  alertHi: () => void;
};

const CustomInput: ForwardRefRenderFunction<CustomInputHandle, PropsType> = (
  props,
  ref
) => {
  const { value, onChange } = props;
  useImperativeHandle(
    ref,
    () => {
      return {
        alertHi: () => alert("hi"),
      };
    },
    []
  );

  return <input value={value} onChange={(e) => onChange(e)} />;
};

export default forwardRef(CustomInput);
