import { useState } from "react";

const TodoListItem = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checked = (e) =>
    setIsChecked((prev) => {
      return e.target.checked;
    });
  const style = {
    liBoxSt: {
      display: "flex",
      gap: "10px",
      fontSize: "20px",
    },
    textSt: {
      fontWeight: "800",
      color: isChecked ? "black" : "skyblue",
      textDecorationLine: isChecked ? "line-through" : "none",
    },
  };
  return (
    <li style={style.liBoxSt}>
      <input type="checkbox" checked={isChecked} onChange={checked} />
      <span style={style.textSt}>{text}</span>
    </li>
  );
};

export default TodoListItem;
