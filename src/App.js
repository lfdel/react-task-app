
import React, { useState } from "react"
import shortid from "shortid"

function App() {


  const [tasks, setTasks] = useState([])
  const [nameTask, setNameTask] = useState("")


  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      const newTask = {
        id: shortid.generate(),
        name: nameTask
      }
      tasks.push(newTask)
      setNameTask('')
      console.log(tasks);
    }
  }

  return (
    <div className="container mt-5">
      <h1>Mis tareas</h1>
      <input className="form-control form-control-lg"
        type="text"
        placeholder="Escriba una tarea, luego presiona ENTER"
        onChange={(e) => setNameTask(e.target.value)}
        value={nameTask}
        onKeyUp={handleKeyEnter}
        autoFocus
      />
      <ul className="list-group mt-5">
        {
          tasks.map((task) => (
            <li className="list-group-item" key={task.id}>
              <span>{task.name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
