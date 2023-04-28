import { useEffect } from "react";

const useTimeout = (cb: () => void, delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => cb(), delay);

    return () => clearTimeout(handler);
  }, [delay]);
};

export { useTimeout };
