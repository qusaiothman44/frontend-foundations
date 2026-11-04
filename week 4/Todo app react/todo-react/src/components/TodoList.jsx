import NewTask from "./NewTask";
const TodoList = ({ task, setTask }) => {
  const onDelete = (index) => {
    setTask(task.filter((t, i) => i !== index));
  };
 const onSave = (index, newTask) => {
  setTask(
    task.map((t, i) => (
      i === index ? newTask : t
    ))
  );
};
  return (
    <div>
      {task.map((t, index) => (
        <NewTask
          key={index}
          task={t}
          onDelete={() => onDelete(index)}
          onSave={(newTask) => onSave(index,newTask)}
        />
      ))}
    </div>
  );
};

export default TodoList;
