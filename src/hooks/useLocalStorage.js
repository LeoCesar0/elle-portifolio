import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Get stored value from localStorage
  const storedValue = localStorage.getItem(key);
  // Parse stored JSON or return initialValue if not present
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Function to update localStorage when state changes
  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
