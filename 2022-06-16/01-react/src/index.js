import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tareasHogar = ["tarea 1", "tarea 2", "tarea 3"];
const tareasTrabajo = ["tarea a", "tarea b", "tarea c"];

// componente
const Tareas = ({ tareas, titulo }) => {
  return (
    <>
      <h1>{titulo}</h1>
      <ul>
        {tareas.map((tarea, i) => (
          <li key={i}>{tarea}</li>
        ))}
      </ul>
    </>
  );
};

// Agregamos elementos
root.render([
  <Tareas key="0" titulo="Tareas Hogar" tareas={tareasHogar} />,
  <Tareas key="1" titulo="Tareas Trabajo" tareas={tareasTrabajo} />,
]);
