import calcular from "../peticionAPI.js";
let dateInput = document.getElementById("date");
export default function operacionesDom() {
  const showDateButton = document.getElementById("boton");

  showDateButton.addEventListener("click", () => {
    event.preventDefault();
    if (dateInput.value < "1900-01-01") {
      alert("Solo disponemos de los datos de fechas superiores al 1900-01-01");
    } else {
      const dateValue = dateInput.value;
      const separarFecha = dateValue.split("-");
      const diaInput = separarFecha[2];
      const mesInput = separarFecha[1];
      const anioInput = separarFecha[0];
      const fechaInput = `${anioInput}-${mesInput}-${diaInput}`;
      calcular(fechaInput);
    }
  });
}

export { dateInput };
