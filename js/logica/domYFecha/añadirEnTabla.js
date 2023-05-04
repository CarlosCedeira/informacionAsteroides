import obtenerFecha from "./domYFecha/fecha.js";

export default function añadirEnTabla() {
  const titulo = document.getElementsByTagName("caption")[0];
  titulo.innerText = `A la fecha de ${fechaEsperada} se registraron un total de ${cantidadMeteoritos} asteroides`;

  // Crear una nueva fila
  const nuevaFila = document.createElement("tr");

  // Crear las celdas de la fila
  const tablaNombre = document.createElement("td");
  const tablaVelocidad = document.createElement("td");
  const tablaHora = document.createElement("td");
  tablaHora.classList.add("hidden");
  const tablaTamañoPromedio = document.createElement("td");
  const tablaOrbitandoSobre = document.createElement("td");
  tablaOrbitandoSobre.classList.add("hidden");

  // Añadir el contenido a las celdas
  tablaNombre.innerText = nombreMeteorito;
  tablaVelocidad.innerText = velocidadPorSegundoRedondeado;
  tablaHora.innerText = horaDetetcion;
  tablaTamañoPromedio.innerText = tamañoPromedio;
  tablaOrbitandoSobre.innerText = orbitandoSobreTraducido;

  // Añadir las celdas a la fila
  nuevaFila.appendChild(tablaNombre);
  nuevaFila.appendChild(tablaVelocidad);
  nuevaFila.appendChild(tablaHora);
  nuevaFila.appendChild(tablaTamañoPromedio);
  nuevaFila.appendChild(tablaOrbitandoSobre);

  // Añadir la fila a la tabla
  tabla.appendChild(nuevaFila);
  let dateInput = document.getElementById("date");
  dateInput.value = fechaEsperada; // añadir la fecha a la busqueda prederminada
}
