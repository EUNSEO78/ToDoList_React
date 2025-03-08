import DateWidget from "./DateWidget";
import TimeWidget from "./TimeWidget";
import Weather from "./Weather";

const Widgets = () => {
  return (
    <div className="flex flex-col gap-10">
      <DateWidget />
      <TimeWidget />
      <Weather />
    </div>
  );
};

export default Widgets;
