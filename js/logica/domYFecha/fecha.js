export default function obtenerFecha() {
  const ayer = new Date();
  const anio = ayer.getFullYear();
  const mes = String(ayer.getMonth() + 1).padStart(2, "0");
  const dia = String(ayer.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`;
}
