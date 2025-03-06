import { useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import "../styles/TodoList.css";

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
    <div className="tdContainer">
      <h1 className="tdTitle">TODOLIST</h1>
      <div className="tdListBox">
        <ul className="tdLists">
          {todoList.map((v, i) => (
            <div className="list">
              <TodoListItem key={i} text={v} />
              <button className="listBtn" onClick={() => remove(i)}>
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
