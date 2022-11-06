/**
 * 1. One button open the modal
 * 2. Three buttons focusing different things inside that modal
 */

import { useRef, useState } from "react";
import ConfirmationModal from "~/components/useImperativeHandle/ConfirmationModal";
import type { RefHandle } from "~/components/useImperativeHandle/ConfirmationModal";

function ReacWorldExample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<RefHandle>(null);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={() => modalRef.current?.focusCloseBtn()}>
        Focus Close
      </button>
      <button onClick={() => modalRef.current?.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current?.focusDenyBtn()}>
        Focus Deny
      </button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default ReacWorldExample;
