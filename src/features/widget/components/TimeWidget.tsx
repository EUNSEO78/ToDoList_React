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
    <div
      className="widgetContainer"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.322)",
        width: "700px",
        padding: "30px 0",
        borderRadius: "5px",
        fontSize: "30px",
        color: "white",
        fontWeight: "800",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      ❅<span>{time.toLocaleTimeString()}</span>❅
    </div>
  );
};

export default TimeWidget;
