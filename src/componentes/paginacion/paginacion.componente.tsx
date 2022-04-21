import "./paginacion.css";
import {
  incrementarPagina,
  decrementarPagina,
} from "../../redux/actions/pagina.action";
import { buscarProximaPaginaThunk } from "../../redux/actions/personaje.actions";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { IRootState, useSelector } from "../../redux/store";
import { TipoPaginaProps } from "../personajes/grilla-personajes.componente";

/**
 * Componente que contiene los botones para paginar
 *
 *
 * @param {'personajes' | 'favoritos'} tipo Declara el contexto en el que tiene que modificar las paginas, ya sea la pagina de favoritos o la principal.
 * @returns un JSX element
 */
const Paginacion: FC<TipoPaginaProps> = ({ tipo }: TipoPaginaProps) => {
  const dispatch = useDispatch();

  const { siguientePagina, personajesPaginas, favoritosPaginas } = useSelector(
    (state: IRootState) => state.personajes
  );
  const { personajes, favoritos } = useSelector(
    (state: IRootState) => state.pagina
  );

  // asigno (personajes o favoritos).

  const paginas = tipo === "personajes" ? personajesPaginas : favoritosPaginas;
  const numPagina = tipo === "personajes" ? personajes : favoritos;

  /**
   * Función que se ejecuta al hacer click en el botón de siguiente
   *
   */
  const handleIncrementarPagina = () => {
    if (
      numPagina === Object.keys(paginas).length - 1 &&
      siguientePagina !== "" &&
      tipo === "personajes"
    ) {
      dispatch(buscarProximaPaginaThunk());
    }
    dispatch(incrementarPagina(tipo));
  };

  return (
    <div className="paginacion">
      <button
        disabled={numPagina === 0}
        className={"primary"}
        onClick={() => dispatch(decrementarPagina(tipo))}
      >
        Anterior
      </button>
      <button className={"primary"} onClick={() => handleIncrementarPagina()}>
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
