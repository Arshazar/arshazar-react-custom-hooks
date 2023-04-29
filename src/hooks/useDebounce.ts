import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number, cb: () => void) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      cb();
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
