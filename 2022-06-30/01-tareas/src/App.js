import { useEffect, useState } from "react";
import FormularioTarea from "./FormularioTarea";
import Tareas from "./Tareas";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/tareas").then((respuesta) => {
      respuesta.json().then((getTareas) => {
        setTareas([...getTareas]);
      });
    });
  }, []);

  const agregarTarea = async (descripcionTarea) => {
    const respuesta = await fetch("http://localhost:4000/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descripcion: descripcionTarea,
        lista: false,
      }),
    });
    if (respuesta.ok) {
      const nuevaTarea = await respuesta.json();
      setTareas([...tareas, nuevaTarea]);
    } else {
      console.error("Fallo al crear tarea");
    }
  };

  const editarTarea = async (tarea) => {
    const respuesta = await fetch("http://localhost:4000/tareas/" + tarea.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...tarea, lista: !tarea.lista }),
    });
    if (respuesta.ok) {
      const tareaModificada = await respuesta.json();
      setTareas(
        tareas.map((t) => {
          if (t.id === tarea.id) {
            return { ...tareaModificada };
          }
          return t;
        })
      );
    }
  };

  const eliminarTarea = async (tareaId) => {
    if (window.confirm("¿Desea eliminar la tarea?")) {
      const respuesta = await fetch("http://localhost:4000/tareas/" + tareaId, {
        method: "DELETE",
      });
      if (respuesta.ok) {
        setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
      } else {
        console.error("error al eliminar tarea");
      }
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
