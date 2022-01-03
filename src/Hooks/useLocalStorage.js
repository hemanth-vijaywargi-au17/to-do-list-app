import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  // LocalStorage onyl stores Strings, so In-order to store an object or array in LocalStorage we use JSON.stringify()
  // and JSON.parse() to retrieve data as array and object

  let localStorageValue = localStorage.getItem(key);
  const [storageValue, setStorageValue] = useState(
    localStorageValue ? JSON.parse(localStorageValue) : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storageValue));
  }, [key, storageValue]);

  return [storageValue, setStorageValue];
}

export default useLocalStorage;
