import { useState } from "react";

function useToggle(intitalValue = false) {
  const [currentState, setCurrentState] = useState(intitalValue);
  const toggle = () => {
    setCurrentState(!currentState);
  };
  return [currentState, toggle];
}

export default useToggle;
