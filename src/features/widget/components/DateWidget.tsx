const DateWidget = () => {
  const date = new Date();
  const localDate = date.toLocaleDateString();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const currentWeek = week[date.getDay()];

  return (
    <div className="w-[800px] bg-myWidgetBg py-8 rounded-md text-3xl font-extrabold text-white flex justify-center g-5 max-md:w-full">
      ❅<span>{localDate}</span>
      <span>({currentWeek})</span>❅
    </div>
  );
};

export default DateWidget;
