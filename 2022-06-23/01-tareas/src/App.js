import { useState } from "react";
import FormularioTarea from "./FormularioTarea";
import Tareas from "./Tareas";

function App() {
  const [tareas, setTareas] = useState([
    { id: Date.now(), descripcion: "tarea1", lista: false },
    { id: Date.now() + 1, descripcion: "tarea2", lista: true },
  ]);

  const agregarTarea = (descripcionTarea) => {
    setTareas([
      ...tareas,
      { id: Date.now(), descripcion: descripcionTarea, lista: false },
    ]);
  };

  const editarTarea = (tareaId) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === tareaId) {
          return { ...tarea, lista: !tarea.lista };
        }
        return tarea;
      })
    );
  };

  const eliminarTarea = (tareaId) => {
    if (window.confirm("¿Desea eliminar la tarea?")) {
      setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
    }
  };

  return (
    <>
      <h1>Tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <Tareas
        tareas={tareas}
        onEditar={editarTarea}
        onEliminar={eliminarTarea}
      />
    </>
  );
}

export default App;
