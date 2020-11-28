/* Expresión de función */
fizzBuzz = (numero) => {
  for (let i = 1; i <= Math.abs(parseInt(numero)); i++) {
    let elementoLista = document.createElement("li");
    let spanFB = document.createElement("span");
    elementoLista.className = "elementoLista";
    if (i % 15 === 0) {
      console.log(`N: ${i} Fizz Buzz`);
      spanFB.classList.add("fizzBuzz");
      /* elementoLista.innerHTML = `${i}`; */
      spanFB.innerHTML = `${i}  Fizz Buzz`;
      lista.appendChild(elementoLista);
      elementoLista.appendChild(spanFB);
      continue;
    } else if (i % 5 === 0) {
      console.log(`N: ${i} Buzz`);
      spanFB.classList.add("buzz");
      spanFB.innerHTML = `${i}  Buzz`;
      lista.appendChild(elementoLista);
      elementoLista.appendChild(spanFB);
      continue;
    } else if (i % 3 === 0) {
      console.log(`N: ${i} Fizz`);
      spanFB.classList.add("fizz");
      spanFB.innerHTML = `${i}  Fizz`;
      lista.appendChild(elementoLista);
      elementoLista.appendChild(spanFB);
      continue;
    }
    console.log(`N: ${i}`);
    elementoLista.innerHTML = i;
    lista.appendChild(elementoLista);
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
