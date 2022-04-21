import "./filtros.css";
import React, { FC, RefObject } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../../redux/actions/personaje.actions";
import PropTypes from "prop-types";

interface filtroProps {
  inputRef: RefObject<HTMLInputElement>;
}

/**
 * Barra de busqueda que permite filtrar los personajes. Desde el componente se puede resetear el valor de la barra.
 * @param inputRef
 * pasamos el inputRef para limpiar el input
 * @returns <FC>
 */

const Filtros: FC<filtroProps> = ({ inputRef }: filtroProps) => {
  const dispatch = useDispatch();

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        id={"filtroNombre"}
        ref={inputRef}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={(e) => dispatch(buscarPersonajesThunk(e.target.value))}
      />
    </div>
  );
};

export default Filtros;
