import operacionesDom from "./logica/domYFecha/dom.js";
import obtenerFecha from "./logica/domYFecha/fecha.js";
import calcular from "./logica/peticionAPI.js";

// pagina estelarium https://ssd.jpl.nasa.gov/tools/orbit_viewer.html
const fechaAyer = obtenerFecha();

calcular(fechaAyer);
operacionesDom();
/*prueba*/