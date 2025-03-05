import "../styles/Widget.css";

const DateWidget = () => {
  const date = new Date();
  const localDate = date.toLocaleDateString();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const currentWeek = week[date.getDay()];

  return (
    <div className="widgetContainer">
      ❅<span>{localDate}</span>
      <span>({currentWeek})</span>❅
    </div>
  );
};

export default DateWidget;
