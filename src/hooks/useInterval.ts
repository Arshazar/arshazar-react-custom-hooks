import { useEffect } from "react";

const useInterval = (cb: () => void, delay: number) => {
  useEffect(() => {
    const handler = setInterval(() => cb(), delay);

    return () => clearInterval(handler);
  }, [delay]);
};

export { useInterval };
