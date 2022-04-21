import Personaje from "./personaje.type";

// Pagina hace referencia a la Pagina de 20 personajes

interface Pagina {
  id: number;
  personajesEnPagina: Personaje[];
}

export default Pagina;
