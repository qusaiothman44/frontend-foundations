import { useState } from "react";
import NewTask from "./NewTask";
const TodoList = ({ task, setTask }) => {
  const [filter, setFilter] = useState("all");

  const filterTasks = task.filter((t) => {
    if (filter === "active") return !t.complete;
    if (filter === "complete") return t.complete;
    return true;
  });

 
  const onDelete = (id) => {
    setTask(task.filter(t => t.id !== id));
  };
  const onSave = (id, newTask) => {
    setTask(task.map(t => (t.id === id ? { ...t, text: newTask ,date: Date.now() } : t)));
  };

  const onComplete = (id) => {
    setTask(
      task.map(t => (t.id === id ? { ...t, complete: !t.complete } : t)),
    );
  };
  const completeNum=()=>{
    let x=0
    for (let index = 0; index < task.length; index++) {
      if(task[index].complete === true){
        x++
      }
      
    }
    return x;
  }
  const deleteCompleted=()=>{
          setTask(task.filter(t => !t.complete));

  }
  
  return (
    <div>
      <div className="head-of-tasks">
         <p>tasks number: {task.length} | </p>
      <p>completed: {completeNum()} </p>
      </div>
           <button onClick={deleteCompleted}>Delete Complete</button>

        <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">all</option>
            <option  value="active">active</option>
            <option  value="complete">completed</option>
        </select>
      {filterTasks.map((t) => (
        <NewTask
          key={t.id}
          task={t}
          onDelete={() => onDelete(t.id)}
          onSave={(newTask) => onSave(t.id, newTask)}
          onComplete={() => onComplete(t.id)}
         
        />
      ))}
    </div>
  );
};

export default TodoList;
