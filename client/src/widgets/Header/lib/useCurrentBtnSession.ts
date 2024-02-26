import { useState } from "react";
export const useLocalStorageState = (
  key: string,
  initialValue: number,
) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState != null
      ? JSON.parse(savedState)
      : initialValue;
  });

  const setLocalStorageState = (
    value: number,
  ) => {
    setState(value);
    localStorage.setItem(
      key,
      JSON.stringify(value),
    );
  };

  return [state, setLocalStorageState];
};
