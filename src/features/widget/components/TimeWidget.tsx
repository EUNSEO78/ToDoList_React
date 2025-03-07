import { useEffect, useState } from "react";
import "../styles/Widget.css";

const TimeWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="widgetContainer">
      ❅<span>{time.toLocaleTimeString()}</span>❅
    </div>
  );
};

export default TimeWidget;
