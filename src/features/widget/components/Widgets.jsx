import DateWidget from "./DateWidget";
import TimeWidget from "./TimeWidget";
import "../styles/Widgets.css";

const Widgets = () => {
  return (
    <div className="widgetsContainer">
      <DateWidget />
      <TimeWidget />
    </div>
  );
};

export default Widgets;
