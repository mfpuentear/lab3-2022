const Persona = (props) => {
  const { persona, onEditar, onEliminar } = props;
  return (
    <li>
      <span>
        {persona.apellido}, {persona.nombre} - {persona.edad} años{" "}
      </span>
      <button onClick={() => onEditar(persona)}>Editar</button>
      <button onClick={() => onEliminar(persona.id)}>Eliminar</button>
    </li>
  );
};

export default Persona;
