export default function borrado() {
  const tabla = document.getElementById("tabla");
  const filas = tabla.getElementsByTagName("tr");
  for (let i = filas.length - 1; i > 0; i--) {
    tabla.removeChild(filas[i]);
  }
}
