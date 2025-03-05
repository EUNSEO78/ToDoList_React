import "./common/reset.css";
import TodoListTemplate from "./features/Todolist/components/TodoListTemplate";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#282C37",
        padding: "50px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>example</div>
        <TodoListTemplate />
      </div>
    </div>
  );
}

export default App;
