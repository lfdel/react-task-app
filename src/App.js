
import React, { useState } from "react"
import shortid from "shortid"

function App() {


  const [tasks] = useState([])
  const [nameTask, setNameTask] = useState("")


  const handleKeyEnter = (event) => {
    if (event.key === 'Enter') {
      const newTask = {
        id: shortid.generate(),
        name: nameTask
      }
      tasks.push(newTask)
      setNameTask('')
    }
  }

  const handelEditTask = (task) => {
    alert(task.name)
  }
  
  const handelDeleteTask = (task) => {
    alert(task.name)
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
      <label className="mt-2">#{tasks.length}</label>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Estado</th>
            <th scope="col">Nombre</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(
              (task, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>Estado</td>
                  <td>{task.name}</td>
                  <td>
                    <button onClick={() => handelEditTask(task)}
                      type="button" class="btn btn-warning">Editar</button>
                  </td>
                  <td>
                    <button onClick={() => handelDeleteTask(task)}
                      type="button" class="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
