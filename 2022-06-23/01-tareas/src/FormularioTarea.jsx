import { useState } from "react";

const FormularioTarea = (props) => {
  const { onAgregar } = props;
  const [descripcionTarea, setDescripcionTarea] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onAgregar(descripcionTarea);
        setDescripcionTarea("");
        e.preventDefault();
      }}
    >
      <label htmlFor="descripcionTarea">Descripcion tarea:</label>
      <input
        name="descripcionTarea"
        value={descripcionTarea}
        onChange={(e) => setDescripcionTarea(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormularioTarea;
