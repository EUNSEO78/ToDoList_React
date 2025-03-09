import { useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import TodoListTitle from "./TodoListTitle";

const TodoList = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue((prev) => e.target.value);

  const onClick = () =>
    setTodoList((prev) => {
      setInputValue("");
      return [...prev, inputValue];
    });

  const remove = (i: number) =>
    setTodoList((prev) => prev.filter((v, index) => index !== i));

  return (
    <div className="w-2/4 h-5/6 py-8 px-5 bg-myWidgetBg rounded-lg flex flex-col justify-center gap-2.5 shadow-2xl shadow-slate-950 max-md:w-full  ">
      <TodoListTitle />
      <div className="w-11/12 h-full m-auto p-5 border-2 border-solid border-white rounded-lg relative">
        <ul className="flex flex-col gap-2.5">
          {todoList.map((v, i) => (
            <div className="flex justify-between items-center border border-white border-solid p-2">
              <TodoListItem key={i} text={v} />
              <button
                className="py-2.5 px-1.5 text-slate-800 bg-white rounded-md font-bold "
                onClick={() => remove(i)}
              >
                delete
              </button>
            </div>
          ))}
        </ul>
        <TodoInput value={inputValue} onChange={onChange} onClick={onClick} />
      </div>
    </div>
  );
};

export default TodoList;
