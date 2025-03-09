import { useEffect, useState } from "react";

const TimeWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="w-[800px] bg-myWidgetBg py-8 rounded-md text-3xl font-extrabold text-white flex justify-center g-5 max-md:w-full">
      ❅<span>{time.toLocaleTimeString()}</span>❅
    </div>
  );
};

export default TimeWidget;
