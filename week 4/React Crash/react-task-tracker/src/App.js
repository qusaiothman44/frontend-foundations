
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  // Fetch all tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch tasks when component mounts
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks((prevTasks) => [...prevTasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Toggle reminder
  const ToggleReminder = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskToggle = await res.json();

    const updated = {
      ...taskToggle,
      reminder: !taskToggle.reminder,
    };

    const updateRes = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updated),
      }
    );

    const data = await updateRes.json();

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? data : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <Add onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={ToggleReminder}
        />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
}
 
export default App;
