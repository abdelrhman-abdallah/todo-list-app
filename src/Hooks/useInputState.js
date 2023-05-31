import { useState } from "react";

const useInputState = (initVal = "") => {
  const [currentVal, seCurrentVal] = useState(initVal);
  const handleChange = (e) => {
    seCurrentVal(e.target.value);
  };
  const reset = () => {
    seCurrentVal("");
  };
  return [currentVal, handleChange, reset];
};

export default useInputState;
