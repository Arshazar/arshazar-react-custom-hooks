import { useRef, useEffect } from "react";

const useUpdate = (callback: () => void, deps: any[] | undefined) => {
  const hasMount = useRef<HTMLElement | boolean>(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

export { useUpdate };
