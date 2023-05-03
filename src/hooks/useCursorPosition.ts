import { useState, useEffect } from "react";

interface Position {
  x: number | null;
  y: number | null;
}

const useCursorPosition = () => {
  const [position, setPosition] = useState<Position>({ x: null, y: null });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handler);

    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);

  return position;
};

export { useCursorPosition };
