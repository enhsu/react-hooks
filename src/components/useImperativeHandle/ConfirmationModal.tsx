import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from "react";

export type RefHandle = {
  focusCloseBtn: () => void;
  focusConfirmBtn: () => void;
  focusDenyBtn: () => void;
};

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
};

const ConfirmationModal: ForwardRefRenderFunction<RefHandle, PropsType> = (
  props,
  ref
) => {
  const { isOpen, onClose } = props;

  const closeRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focusCloseBtn() {
        closeRef.current?.focus();
      },
      focusConfirmBtn() {
        confirmRef.current?.focus();
      },
      focusDenyBtn() {
        denyRef.current?.focus();
      },
    }),
    []
  );

  if (!isOpen) return null;

  return (
    <div>
      <button
        className="focus:text-red-600"
        ref={closeRef}
        onClick={() => onClose()}
      >
        Close
      </button>
      <div>
        <button className="focus:text-red-600" ref={confirmRef}>
          Yes
        </button>
        <button className="focus:text-red-600" ref={denyRef}>
          No
        </button>
      </div>
    </div>
  );
};

export default forwardRef(ConfirmationModal);
