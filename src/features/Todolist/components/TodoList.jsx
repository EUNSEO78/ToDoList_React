import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoListItem from "./TodoListItem";
import "../styles/TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => setInputValue((prev) => e.target.value);
  const onClick = () =>
    setTodoList((prev) => {
      setInputValue("");
      return [...prev, inputValue];
    });
  const remove = (i) =>
    setTodoList((prev) => prev.filter((v, index) => index !== i));
  return (
    <div className="tdContainer">
      <h1 className="tdTitle">TODOLIST</h1>
      <div className="tdListBox">
        <ul className="tdLists">
          {todoList.map((v, i) => (
            <div className="list">
              <TodoListItem key={i} text={v} />
              <button className="listBtn" id={i} onClick={() => remove(i)}>
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
