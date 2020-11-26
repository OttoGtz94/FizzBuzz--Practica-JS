
/* Expresión de función */
fizzBuzz = (numero) => {
  for (let i = 1; i <= Math.abs(parseInt(numero)); i++) {
    let elemento = document.createElement("li");
    elemento.className = "elementoLista";
    if (i % 15 === 0) {
      console.log(`N: ${i} Fizz Buzz`);
      elemento.innerHTML = `${i} Fizz Buzz`;
      lista.appendChild(elemento);
      continue;
    } else if (i % 5 === 0) {
      console.log(`N: ${i} Buzz`);
      elemento.innerHTML = `${i} Buzz`;
      lista.appendChild(elemento);
      continue;
    } else if (i % 3 === 0) {
      console.log(`N: ${i} Fizz`);
      elemento.innerHTML = `${i} Fizz`;
      lista.appendChild(elemento);
      continue;
    }
    console.log(`N: ${i}`);
    elemento.innerHTML = i;
    lista.appendChild(elemento);
  }
};

let txtNumero = document.querySelector(".txtNumero");
let btnMostrar = document.querySelector(".btnMostrar");
let btnLimpiar = document.querySelector(".btnLimpiar");
let lista = document.querySelector(".lista");

btnLimpiar.style.display = "none";

/* Evento para botón montror */
btnMostrar.addEventListener("click", () => {
  console.clear();
  btnLimpiar.style.display = "block";
  btnMostrar.style.display = "none";
  txtNumero.disabled = true;
  parseInt(txtNumero.value) && parseInt(txtNumero.value) > 0
    ? fizzBuzz(txtNumero.value)
    : (alert("Caracter incorrecto"),
      (btnLimpiar.style.display = "none"),
      (btnMostrar.style.display = "block"),
      (txtNumero.disabled = false));
  txtNumero.value = "";
});

/* Evento para boton de limpiar */
btnLimpiar.addEventListener("click", () => {
  console.clear();
  btnLimpiar.style.display = "none";
  btnMostrar.style.display = "block";
  txtNumero.disabled = false;
  let elementoLista = document.querySelectorAll(".elementoLista");
  for (let i = 0; i < elementoLista.length; i++) {
    elementoLista[i].remove();
  }
});

/* parseInt(txtNumero) && parseInt(txtNumero) > 0
  ? fizzBuzz(txtNumero)
  : console.log("Caracter incorrecto"); */

/* function fizzBuzz(numero) {
  for (let i = 1; i <= Math.abs(parseInt(numero)); i++) {
    if (i % 15 === 0) {
      console.log(`N: ${i} Fizz Buzz`);
      continue;
    } else if (i % 5 === 0) {
      console.log(`N: ${i} Buzz`);
      continue;
    } else if (i % 3 === 0) {
      console.log(`N: ${i} Fizz`);
      continue;
    }
    console.log(`N: ${i}`);
  }
} */
