import { useState } from "react";

useState;
const NewTask = ({ task, onDelete, onSave,onComplete }) => {
  const [newTask, setNewTask] = useState(task.text);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <h1 className={`${task.complete ? 'complete' :''}`}>{task.text}</h1>
      <p>{new Date(task.date).toLocaleString()}</p>
      <button onClick={onComplete}>complete</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      <div className={`${isEdit ? "no-edit" : "edit"}`}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={() => {
            onSave(newTask);
            setIsEdit(false);
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default NewTask;
