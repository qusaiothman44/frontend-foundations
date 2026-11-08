import TodoFrom from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [isloaded, setISLoaded] = useState(false);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("task"));

    if (savedTasks) {
      setTask(savedTasks);
    }
    setISLoaded(true);
  }, []);

  useEffect(() => {
    if (isloaded) {
      localStorage.setItem("task", JSON.stringify(task));
    }
  }, [task, isloaded]);
  return (
    <>
      <section id="center">
        <TodoFrom setTask={setTask} />
        <TodoList task={task} setTask={setTask} />
      </section>
    </>
  );
}

export default App;
