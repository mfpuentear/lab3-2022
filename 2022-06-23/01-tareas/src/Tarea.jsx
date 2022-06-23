const Tarea = (props) => {
  const { tarea, onEditar, onEliminar } = props;
  return (
    <li style={{ textDecoration: tarea.lista ? "line-through" : "" }}>
      <span onClick={() => onEditar(tarea.id)}>{tarea.descripcion} </span>
      <button onClick={() => onEliminar(tarea.id)}>X</button>
    </li>
  );
};

export default Tarea;
