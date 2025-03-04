// TodoInsert/TodoInput , TodoListItem/TodoListBox -> TodoList

import TodoInput from "./TodoInput";

const TodoListTemplate = () => {
  const style = {
    containerStyle: {
      width: "40%",
      height: "90%",
      padding: "30px 20px",
      backgroundColor: "white",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
    },
    h1Style: {
      width: "fit-content",
      padding: "20px",
      borderRadius: "20px",
      backgroundColor: "#282C37",
      color: "white",
    },
    listBoxStyle: {
      width: "95%",
      height: "100%",
      border: "3px solid #1D1D1F",
      borderRadius: "10px",
      position: "relative",
    },
  };
  return (
    <div style={style.containerStyle}>
      <h1 style={style.h1Style}>TODOLIST</h1>
      <div style={style.listBoxStyle}>
        <TodoInput />
      </div>
    </div>
  );
};

export default TodoListTemplate;
