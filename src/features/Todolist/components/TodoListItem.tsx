import { useState } from "react";

type TodoListItemProps = {
  text: string;
};

const TodoListItem = ({ text }: TodoListItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checked = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);

  return (
    <li className="flex gap-2.5 text-xl ">
      <input type="checkbox" checked={isChecked} onChange={checked} />
      <span
        className={`font-extrabold ${
          isChecked ? "font-black line-through" : "text-sky-600 none"
        }`}
      >
        {text}
      </span>
    </li>
  );
};

export default TodoListItem;
