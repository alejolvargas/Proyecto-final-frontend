import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { FC, useEffect, useRef, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk } from "../redux/actions/personaje.actions";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 *
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {
  const dispatch = useDispatch();

  // se cargan los datos
  useEffect(() => {
    dispatch(buscarPersonajesThunk(""));
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  // nos carga nuevamente todos los datos  nos pone el input vacio mediante  useRef
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      dispatch(buscarPersonajesThunk(""));
    }
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={handleClick}>
          Limpiar Filtros
        </button>
      </div>
      <Filtros inputRef={inputRef} />
      <Paginacion tipo="personajes" />
      <GrillaPersonajes tipo="personajes" />
      <Paginacion tipo="personajes" />
    </div>
  );
};

export default PaginaInicio;
