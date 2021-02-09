
import React, { useState } from "react"

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      const newTask = {
        id: 1,
        task
      }
      setTasks([ ...tasks, newTask])
      setTask('')
      console.log(tasks);
    }
  }

  return (
    <div className="container mt-5">
      <h1>Mis tareas</h1>
      <input className="form-control form-control-lg"
        type="text"
        placeholder="Escriba una tarea"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        onKeyPress={handleKeyEnter}
        autoFocus
      />
      <div className="row">
        <div className="col-12"></div>
      </div>
    </div>
  );
}

export default App;
