import { useState } from "react";
import { TodoViewer } from "./components/TodoViewer";
import "./App.css";
import { NewTodo } from "./components/NewTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NewTodo />
      <TodoViewer />
    </>
  );
}

export default App;
