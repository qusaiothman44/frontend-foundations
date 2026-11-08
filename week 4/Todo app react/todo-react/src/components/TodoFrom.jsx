import { useState } from "react";
const TodoFrom = ({ setTask }) => {
  const [newTask, setNewTask] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if(!newTask.trim()){
        alert("plz add task")
        return
    }
    setTask(prev =>[...prev,{
      id:crypto.randomUUID(),
        text: newTask,
        complete: false,
        date: Date.now()
    }])

    setNewTask('')
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default TodoFrom;
