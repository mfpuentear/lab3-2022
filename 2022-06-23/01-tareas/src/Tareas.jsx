import Tarea from "./Tarea";

const Tareas = (props) => {
  const { tareas, onEditar, onEliminar } = props;
  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
};

export default Tareas;
