import "./common/reset.css";
import TodoList from "./features/Todolist/components/TodoList";
import Widgets from "./features/widget/components/Widgets";

function App() {
  //  bg-gradient-to-r from-[#243949] to-[#517fa4]
  return (
    <div className="w-screen h-screen bg-[url('./common/background_img1.jpg')] py-[50px] max-md:h-[200vh]">
      <div className="w-full max-w-[90%] h-full m-auto flex justify-between items-center max-md:flex-col  max-md:gap-5 ">
        <Widgets />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
