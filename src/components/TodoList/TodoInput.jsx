import { useState } from "react";

const TodoInput = () => {
  const style = {
    inputBoxSt: {
      width: "90%",
      height: "50px",
      padding: "10px 5px",
      border: "1px solid black",
      display: "flex",
      justifyContent: "space-between",
      position: "absolute",
      bottom: "20px",
      left: "20px",
    },
    inputSt: {
      width: "80%",
      height: "100%",
      border: "none",
      outline: "none",
      fontSize: "15px",
      fontWeight: "800",
    },
    btnSt: {
      padding: "5px",
      backgroundColor: "#282C37",
      color: "white",
      border: "none",
      borderRadius: "10px",
      fontSize: "17px",
    },
  };

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setInputValue((prev) => {
      return e.target.value;
    });
  };
  const addItem = () => {
    setTodoList((prev) => {
      return [...prev, inputValue];
    });
  };

  return (
    <>
      <div>
        <ul>
          {todoList.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <div style={style.inputBoxSt}>
        <input
          style={style.inputSt}
          type="text"
          value={inputValue}
          placeholder="Value"
          onChange={onChange}
        />
        <button style={style.btnSt} onClick={addItem}>
          INSERT
        </button>
      </div>
    </>
  );
};

export default TodoInput;
