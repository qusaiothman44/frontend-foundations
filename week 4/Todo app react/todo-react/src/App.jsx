import TodoFrom from './components/TodoFrom'
import TodoList from './components/TodoList'
import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState([])

  return (
    <>
      <section id="center">
       <TodoFrom setTask={setTask}/>
       <TodoList task={task} setTask={setTask}/>
      </section>
    </>
  )
}

export default App
