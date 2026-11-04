import { useState } from "react"

useState
const NewTask = ({task, onDelete ,onSave}) => {
   const [newTask , setNewTask]= useState(task);

   const [isEdit,setIsEdit]= useState(false);
  return (
    <div>
      <h1>{task}</h1>
      <button onClick={onDelete}>Delete</button>
      <button onClick={()=>setIsEdit(!isEdit)}>Edit</button>
      <div className={`${isEdit ? 'no-edit' :'edit' }`}>
      <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)}
/>
<button onClick={()=>{onSave(newTask); setIsEdit(false)}}>save</button>
      </div>
    </div>
  )
}

export default NewTask
