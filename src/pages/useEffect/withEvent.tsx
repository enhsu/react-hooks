import { useEffect, useState } from "react";

function HandleWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", _handleResize);

    // Clean up the event listener while the component is unmounted
    return () => {
      window.removeEventListener("resize", _handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;

  function _handleResize() {
    setWindowWidth(window.innerWidth);
  }
}

export default HandleWindowWidth;
