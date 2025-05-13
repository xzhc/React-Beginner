import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const localValue = localStorage.getItem(key);
      // 确保 localValue 不是 null、undefined 或字符串 "undefined"
      if (localValue != null) {
        return JSON.parse(localValue);
      }
    } catch (error) {
      console.error(`Error reading from localStorage for key "${key}":`, error);
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}
