import "./common/reset.css";
import TodoList from "./features/Todolist/components/TodoList";
import DateWidget from "./features/widget/components/DateWidget";
import TimeWidget from "./features/widget/components/TimeWidget";
import Widgets from "./features/widget/components/Widgets";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
        backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)",
        padding: "50px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "90%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Widgets />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
