import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import React, { FC } from "react";
import { IRootState, useSelector } from "../../redux/store";

export interface TipoPaginaProps {
  tipo: "personajes" | "favoritos";
}

/**
 *
 * @param {'personajes' | 'favoritos'} tipo tipo de obketo de se renderiza
 * @returns un JSX element
 */
const GrillaPersonajes: FC<TipoPaginaProps> = ({ tipo }: TipoPaginaProps) => {
  //Estado desde el store.
  const { status, favoritosPaginas, personajesPaginas } = useSelector(
    (state: IRootState) => state.personajes
  );
  // se traen los dos objetos y el que tenga datos es el que se va a renderizar
  const { personajes, favoritos } = useSelector((state) => state.pagina);

  const tipoPaginas =
    tipo === "personajes" ? personajesPaginas : favoritosPaginas;

  if (status === "LOADING") return <div>Cargando...</div>;
  if (status === "ERROR") return <div>Error en la carga de personajes.</div>;
  if (!tipoPaginas || tipoPaginas.length === 0) return <div></div>;

  // dependiendo la accion se cargara la grilla

  const personajes_en_pagina = tipoPaginas.find(
    (tipoPaginas) =>
      tipoPaginas.id === (tipo === "personajes" ? personajes : favoritos)
  );
  return (
    <div className="grilla-personajes">
      {personajes_en_pagina &&
        personajes_en_pagina.personajesEnPagina.map((personaje) => (
          <TarjetaPersonaje
            personaje={personaje}
            key={"Personaje_" + personaje.id}
          />
        ))}
    </div>
  );
};

export default GrillaPersonajes;
