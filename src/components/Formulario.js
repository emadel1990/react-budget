import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombregasto, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) || nombregasto.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //construir el gasto
    const gasto = {
      nombregasto,
      cantidad,
      id: shortid.generate(),
    };
    //pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //resetear el form
    guardarCantidad(0);
    guardarNombre("");
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error
          mensaje="Ambos campos son obligatorios o Prespuesto
            incorrecto"
        />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombregasto}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value), 10)}
        />
      </div>
      <input
        type="submit"
        className="u-full-width button-primary"
        value="Agregar Gasto"
      />
    </form>
  );
};

//documentacion del componente
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
