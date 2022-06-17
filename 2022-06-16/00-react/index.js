//Inicializamos ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

const tareasHogar = [
  { id: 1, tarea: "Tarea 1" },
  { id: 2, tarea: "Tarea 2" },
  { id: 3, tarea: "Tarea 3" },
];

const tareasTrabajo = [
  { id: 1, tarea: "Tarea 1" },
  { id: 2, tarea: "Tarea 2" },
  { id: 3, tarea: "Tarea 3" },
  { id: 4, tarea: "Tarea 4" },
];

const Tareas = ({ tareas }) => {
  return React.createElement(
    "ul",
    null,
    tareas.map((tarea) =>
      React.createElement("li", { key: tarea.id }, tarea.nombre)
    )
  );
};

// Agregamos elementos
root.render([
  React.createElement("h1", null, "Tareas Hogar"),
  React.createElement(Tareas, { tareas: tareasHogar }, null),
  React.createElement("h1", null, "Tareas trabajo"),
  React.createElement(Tareas, { tareas: tareasTrabajo }, null),
]);
