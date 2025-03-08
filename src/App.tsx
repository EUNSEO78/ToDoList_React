import "./common/reset.css";
import TodoList from "./features/Todolist/components/TodoList";
import Widgets from "./features/widget/components/Widgets";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#243949] to-[#517fa4] py-[50px] max-sm:h-[200vh]">
      <div className="w-full max-w-[90%] h-full m-auto flex justify-between items-center max-sm:flex-col">
        <Widgets />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
