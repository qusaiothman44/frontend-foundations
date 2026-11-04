import { useState } from "react";
import NewTask from "./NewTask";
const TodoList = ({ task, setTask }) => {
  const [filter, setFilter] = useState("all");

  const filterTasks = task.filter((t) => {
    if (filter === "active") return !t.complete;
    if (filter === "complete") return t.complete;
    return true;
  });

 
  const onDelete = (index) => {
    setTask(task.filter((t, i) => i !== index));
  };
  const onSave = (index, newTask) => {
    setTask(task.map((t, i) => (i === index ? { ...t, text: newTask } : t)));
  };

  const onComplete = (index) => {
    setTask(
      task.map((t, i) => (i === index ? { ...t, complete: !t.complete } : t)),
    );
  };
  return (
    <div>
        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">all</option>
            <option  value="active">active</option>
            <option  value="complete">completed</option>
        </select>
      {filterTasks.map((t, index) => (
        <NewTask
          key={index}
          task={t}
          onDelete={() => onDelete(task.indexOf(t))}
          onSave={(newTask) => onSave(task.indexOf(t), newTask)}
          onComplete={() => onComplete(task.indexOf(t))}
        />
      ))}
    </div>
  );
};

export default TodoList;
