import { useEffect, useState, useRef } from "react";

const useThrottle = (cb: () => void, period: number, delay: number) => {
  const [time, setTime] = useState(period);
  const interval = useRef<any>(undefined);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((time: number) => time - delay);
      cb();
    }, delay);

    return () => {
      setTime(period);
    };
  }, []);

  useEffect(() => {
    if (time === 0) clearInterval(interval.current);
  }, [time]);
};

export { useThrottle };
