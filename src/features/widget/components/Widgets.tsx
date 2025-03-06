import DateWidget from "./DateWidget";
import TimeWidget from "./TimeWidget";
import Weather from "./Weather";
import "../styles/Widgets.css";

const Widgets = () => {
  return (
    <div className="widgetsContainer">
      <DateWidget />
      <TimeWidget />
      <Weather />
    </div>
  );
};

export default Widgets;
