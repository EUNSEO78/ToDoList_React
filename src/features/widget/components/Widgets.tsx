import DateWidget from "./DateWidget";
import TimeWidget from "./TimeWidget";
import Weather from "./Weather";

const Widgets = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-10  max-md:gap-1 max-md:w-full">
      <DateWidget />
      <TimeWidget />
      <Weather />
    </div>
  );
};

export default Widgets;
