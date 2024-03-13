import { useEffect, useState } from "react";

export default function Timer({ timout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timout);
    return () => clearTimeout(timer);
  }, [timout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      max={timout}
      value={remainingTime}
      className={mode}
    />
  );
}
