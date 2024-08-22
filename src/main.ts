// function cambiarResultadoAnterior() {
//     const resultado = document.getElementById("resultado");

//     if (resultado !== undefined && resultado !== null) {
//         const text = resultado.innerText;
//         let numero = Number(text);
//         numero -= 1;
//         resultado.innerText = numero.toString().padStart(2, '0');
//     };
// };

// function cambiarResultadoSiguiente() {
//     const resultado = document.getElementById("resultado");

//     if (resultado !== undefined && resultado !== null) {
//         const text = resultado.innerText;
//         let numero = Number(text);
//         numero += 1;
//         resultado.innerText = numero.toString().padStart(2, '0');
//     };
// };

// function cambiarResultadoReset() {
//     const resultado = document.getElementById("resultado");

//     if (resultado !== undefined && resultado !== null) {
//         const text = resultado.innerText;
//         let numero = Number(text);
//         numero = 0;
//         resultado.innerText = numero.toString().padStart(2, '0');
//     }
// };

const mostrarResultado = (idEvent: string) => {
  const resultado = document.getElementById("resultado");

  if (
    resultado !== undefined &&
    resultado !== null &&
    resultado instanceof HTMLHeadingElement
  ) {
    if (idEvent == "anterior") {
      const text = resultado.innerHTML;
      let numero = parseInt(text);
      numero -= 1;
      resultado.innerHTML = numero.toString().padStart(2, "0");
    } else if (idEvent == "siguiente") {
      const text = resultado.innerHTML;
      let numero = parseInt(text);
      numero += 1;
      resultado.innerHTML = numero.toString().padStart(2, "0");
    } else if (idEvent == "reset") {
      const text = resultado.innerHTML;
      let numero = parseInt(text);
      numero = 0;
      resultado.innerHTML = numero.toString().padStart(2, "0");
    }
  }
};

const cambiarResultado = (idUsuario: string) => {
  const resultado = document.getElementById("resultado");
  const usuario = document.getElementById(idUsuario) as HTMLInputElement;

  if (
    resultado !== undefined &&
    resultado !== null &&
    usuario !== undefined &&
    usuario !== null
  ) {
    let numero = parseInt(usuario.value);
    resultado.innerHTML = numero.toString().padStart(2, "0");
  }
};

const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const botonReset = document.getElementById("reset");
const aceptar = document.getElementById("aceptar");
const usuario = document.getElementById("userNumber");

if (botonAnterior !== undefined && botonAnterior !== null) {
  botonAnterior!.addEventListener("click", () => {
    mostrarResultado("anterior");
  });
}

if (botonSiguiente !== undefined && botonSiguiente !== null) {
  botonSiguiente!.addEventListener("click", () => {
    mostrarResultado("siguiente");
  });
}

if (botonReset !== undefined && botonReset !== null) {
  botonReset!.addEventListener("click", () => {
    mostrarResultado("reset");
  });
}

if (aceptar !== undefined && aceptar !== null) {
  aceptar.addEventListener("click", () => {
    cambiarResultado("userNumber");
  });
}
