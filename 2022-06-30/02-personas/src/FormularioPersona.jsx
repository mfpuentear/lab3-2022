import { useEffect, useState } from "react";

const FormularioPersona = (props) => {
  const { modoAgregar, onAgregar, onEditar, onCancelar } = props;

  const [persona, setPersona] = useState(props.persona);

  useEffect(() => {
    setPersona(props.persona);
  }, [props.persona]);

  return (
    <form
      onSubmit={(e) => {
        if (modoAgregar) {
          onAgregar(persona);
        } else {
          onEditar(persona);
        }
        e.preventDefault();
      }}
    >
      <label htmlFor="nombre">Nombre:</label>
      <input
        name="nombre"
        value={persona.nombre}
        onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
      />
      <label htmlFor="apellido">Apellido:</label>
      <input
        name="apellido"
        value={persona.apellido}
        onChange={(e) => setPersona({ ...persona, apellido: e.target.value })}
      />
      <label htmlFor="edad">Edad:</label>
      <input
        name="edad"
        value={persona.edad}
        onChange={(e) => setPersona({ ...persona, edad: +e.target.value })}
        type="number"
      />
      <button type="submit">{modoAgregar ? "Agregar" : "Editar"}</button>
      {!modoAgregar && <button onClick={onCancelar}>Cancelar</button>}
      {/* Dibujar un componente u otro 
      {!modoAgregar ? (
        <button onClick={onCancelar}>Cancelar</button>
      ) : (
        <OtroComponente></OtroComponente>
      )}
      */}
    </form>
  );
};

export default FormularioPersona;
