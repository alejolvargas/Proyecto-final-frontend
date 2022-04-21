import Personaje from "./personaje.type";

// Al guardar esta informacion tanto de personaje como de paginas

export interface Respuesta {
  personajes: Personaje[];
  siguientePagina: string;
}
