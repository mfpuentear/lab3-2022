import Persona from "./Persona";

const Personas = (props) => {
  const { personas, onEditar, onEliminar } = props;
  return (
    <ul>
      {personas.map((persona) => (
        <Persona
          key={persona.id}
          persona={persona}
          onEditar={onEditar}
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
};

export default Personas;
