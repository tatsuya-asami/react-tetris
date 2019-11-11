import { useEffect, useRef } from 'react';

interface IuseInterval {
  callback: void;
  delay: any;
}

export function useInterval(callback: () => void, delay: any) {
  // console.log(callback);
  // console.log(delay);
  const savedCallback = useRef<any>(null);
  // Remember the latest callback.
  // console.log(savedCallback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
