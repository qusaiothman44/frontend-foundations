import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
      const [tasks,setTasks]= useState( [
  { id: 1, text: "Docktors blah blah", day: " Feb 5th", reminder: true },
  { id: 1, text: "eng blah blah", day: " mar 9th", reminder: false },
  { id: 1, text: "IT blah blah", day: " may 2th", reminder: false },
])
  return (
    <div className="container">
    <Header/>
<Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
