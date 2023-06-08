const form = document.querySelector(".form");

const generate = () => {
  let html = "";
  for (let index = 0; index < parseInt(form.cant.value); index++) {
    html += form.text.value + "\n";
  }

  form.result.innerHTML = html;
};

const copyText = () => {
  form.result.select();
  form.result.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
  document.execCommand("copy");
};

form.copy.addEventListener("click", (e) => {
    copyText();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  generate();
});
