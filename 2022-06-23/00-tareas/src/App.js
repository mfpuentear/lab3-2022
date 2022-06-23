import { useState } from "react";

function App() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [tareas, setTareas] = useState([
    { descripcion: "Tarea 1", lista: false },
    { descripcion: "Tarea 2", lista: true },
  ]);

  const agregarTarea = (e) => {
    setTareas([...tareas, { descripcion: nombreTarea, lista: false }]);
    setNombreTarea("");
    e.preventDefault();
  };

  const editarTarea = (tareaIndex) => {
    setTareas(
      tareas.map((tarea, i) => {
        if (i === tareaIndex) {
          return { ...tarea, lista: !tarea.lista };
        }
        return tarea;
      })
    );
  };

  const eliminarTarea = (tareaIndex) => {
    if (
      window.confirm(
        "¿Desea eliminar la tarea " + tareas[tareaIndex].descripcion + "?"
      )
    ) {
      setTareas(tareas.filter((_, i) => i !== tareaIndex));
    }
  };

  return (
    <>
      <h1>Tareas</h1>
      <form onSubmit={agregarTarea}>
        <label htmlFor="nombreTarea">Nombre de tarea:</label>
        <input
          name="nombreTarea"
          value={nombreTarea}
          onChange={(e) => setNombreTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tareas.map((tarea, i) => (
          <li key={i}>
            <span
              style={{ textDecoration: tarea.lista ? "line-through" : "" }}
              onClick={() => editarTarea(i)}
            >
              {tarea.descripcion}
            </span>
            <button onClick={() => eliminarTarea(i)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
