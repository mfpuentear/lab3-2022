import { useState } from "react";
import FormularioPersona from "./FormularioPersona";
import Personas from "./Personas";

function App() {
  const [personas, setPersonas] = useState([
    { id: Date.now(), nombre: "Pepe", apellido: "Sanchez", edad: 30 },
    { id: Date.now() + 1, nombre: "Jose", apellido: "Perez", edad: 35 },
  ]);

  const personaInicial = {
    nombre: "",
    apellido: "",
    edad: 0,
  };

  const [personaElegida, setPersonaElegida] = useState(personaInicial);
  const [modoAgregar, setModoAgregar] = useState(true);

  const agregarPersona = (persona) => {
    setPersonas([...personas, { id: Date.now(), ...persona }]);
    setPersonaElegida(personaInicial);
  };

  const editarPersona = (personaEditada) => {
    setPersonas(
      personas.map((persona) =>
        persona.id === personaEditada.id ? personaEditada : persona
      )
    );
    setPersonaElegida(personaInicial);
    setModoAgregar(true);
  };

  const eliminarPersona = (personaId) => {
    if (window.confirm("¿Desea eliminar la persona?")) {
      setPersonas(personas.filter((persona) => persona.id !== personaId));
    }
  };

  return (
    <>
      <FormularioPersona
        persona={personaElegida}
        modoAgregar={modoAgregar}
        onAgregar={agregarPersona}
        onEditar={editarPersona}
        onCancelar={() => {
          setPersonaElegida(personaInicial);
          setModoAgregar(true);
        }}
      />
      <Personas
        personas={personas}
        onEditar={(persona) => {
          setPersonaElegida(persona);
          setModoAgregar(false);
        }}
        onEliminar={eliminarPersona}
      />
    </>
  );
}

export default App;
