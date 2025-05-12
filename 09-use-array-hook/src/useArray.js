import { useCallback, useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  const push = useCallback((element) => setArray((a) => [...a, element]), []);

  const replace = useCallback(
    (index, newElement) =>
      setArray((a) => [
        ...a.slice(0, index),
        newElement,
        ...a.slice(index + 1),
      ]),
    []
  );

  const filter = useCallback(
    (callback) => setArray((a) => a.filter(callback)),
    []
  );

  const remove = useCallback(
    (index) => setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]),
    []
  );

  const clear = useCallback(() => setArray([]), []);
  const reset = useCallback(() => setArray(initialArray), [initialArray]);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
