import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoListItem from "./TodoListItem";
import "../styles/TodoListTemplate.css";

const TodoListTemplate = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setInputValue((prev) => {
      return e.target.value;
    });
  };
  const onClick = () => {
    setTodoList((prev) => {
      return [...prev, inputValue];
    });
  };
  const remove = () => {
    setTodoList((prev) => {
      return todoList.filter((v) => v.id !== v.id);
    });
  };
  return (
    <div className="tdContainer">
      <h1 className="tdTitle">TODOLIST</h1>
      <div className="tdListBox">
        <ul className="tdLists">
          {todoList.map((v, i) => (
            <div className="list">
              <TodoListItem key={i} text={v} />
              <button className="listBtn" id={i} onClick={remove}>
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

export default TodoListTemplate;
