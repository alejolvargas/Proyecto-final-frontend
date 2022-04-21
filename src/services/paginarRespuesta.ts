import Personaje from "../types/personaje.type";
import Pagina from "../types/pagina.type";

/**
 * Recibe la respuesta de la API (un array de personajes) donde se cargar 20 elementos
 *
 *@param respuesta Array de personajes que se reciben de la API;
 *
 *@returns array de Personaje[];
 * */

export const paginarRespuesta = (respuesta: Personaje[]): Pagina[] => {
  const MAX_PERSONAJES_POR_PAGINA = 20;
  let numero_de_paginas = Math.ceil(
    respuesta.length / MAX_PERSONAJES_POR_PAGINA
  );
  let personajes_por_pagina = [
    {
      id: 0,
      personajesEnPagina: respuesta.slice(
        0,
        Math.min(MAX_PERSONAJES_POR_PAGINA, respuesta.length)
      ),
    },
  ];
  for (let i = 1; i < numero_de_paginas; i++) {
    personajes_por_pagina.push({
      id: i,
      personajesEnPagina: respuesta.slice(
        i * MAX_PERSONAJES_POR_PAGINA,
        Math.min((i + 1) * MAX_PERSONAJES_POR_PAGINA, respuesta.length)
      ),
    });
  }
  return personajes_por_pagina;
};
