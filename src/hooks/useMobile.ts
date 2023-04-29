import { useEffect, useState } from "react";

let userAgent = "";

const useMobile = (justSmallDevices = false) => {
  const deviceSize = justSmallDevices ? 480 : 992;
  const [size, setSize] = useState(0);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = () => {
    window && setSize(window.innerWidth);
  };

  return size
    ? size <= deviceSize
    : userAgent.match(/Android/i) ||
        userAgent.match(/webOS/i) ||
        userAgent.match(/iPhone/i) ||
        userAgent.match(/iPad/i) ||
        userAgent.match(/iPod/i) ||
        userAgent.match(/BlackBerry/i) ||
        userAgent.match(/Windows Phone/i);
};

const setIsMobile = (agent: string) => {
  userAgent = agent;
};

export { useMobile, setIsMobile };
