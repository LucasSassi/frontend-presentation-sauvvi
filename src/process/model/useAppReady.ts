import { useEffect, useState } from "react";

export const useAppReady = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsReady(true);
    }, 150);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return {
    isReady
  };
};