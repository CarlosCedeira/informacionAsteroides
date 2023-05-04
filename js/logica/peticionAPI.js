import borrado from "./bucles/eliminarContenido.js";
import { dateInput } from "./domYFecha/dom.js";

export default function calcular(fechaEsperada) {
  borrado(); // Llamada a la funcion que se encarga de borrar la informacion de la tabla
  dateInput.min = "1900-01-01"; // Fecha minima

  fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaEsperada}&end_date=${fechaEsperada}&api_key=C4IhGy9caqXbXdATHPInfn0ADuSrPFgXzjGZ4Cds`
  )
    .then((response) => response.json())
    .then((data) => {
      const meteoritos = data.near_earth_objects;
      const cantidadMeteoritos = meteoritos[`${fechaEsperada}`].length;

      //Bucle que recoore la informacion de la api y la añade a la tabla
      for (let i = 0; i < cantidadMeteoritos; i++) {
        let nombreMeteorito = meteoritos[`${fechaEsperada}`][i].name;
        let horaDetetcion =
          meteoritos[`${fechaEsperada}`][
            i
          ].close_approach_data[0].close_approach_date_full.split(" ")[1];

        let tamañoMaximo =
          +meteoritos[`${fechaEsperada}`][i].estimated_diameter.kilometers
            .estimated_diameter_max;
        let tamañoMaximoRedondeado = +tamañoMaximo;

        let tamañoMinimo =
          +meteoritos[`${fechaEsperada}`][i].estimated_diameter.kilometers
            .estimated_diameter_min;
        let tamañoMinimoRedondeado = +tamañoMinimo;

        let tamañoPromedio = (
          (tamañoMinimoRedondeado + tamañoMaximoRedondeado) /
          2
        ).toFixed(4);

        let velocidadPorSegundo =
          +meteoritos[`${fechaEsperada}`][i].close_approach_data[0]
            .relative_velocity.kilometers_per_second;
        let velocidadPorSegundoRedondeado = velocidadPorSegundo.toFixed(4);

        let orbitandoSobre =
          meteoritos[`${fechaEsperada}`][i].close_approach_data[0]
            .orbiting_body;
        let orbitandoSobreTraducido = orbitandoSobre.replace(
          /Earth/g,
          "Tierra"
        );

        // Separar Dom del bucle for principal
        // Identificar la tabla en el DOM

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
    })
    .catch((error) => {
      // Manejar los errores
      console.error(error);
    });
}
