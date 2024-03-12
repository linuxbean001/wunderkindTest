import { useState, useEffect } from "react";

function useWindowEventListener() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== `undefined` ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== `undefined` ? window.innerHeight : 0
  );

  useEffect(() => {
    const listener = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight,
  };
}

export default useWindowEventListener;
