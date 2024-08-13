

function cambiarResultadoAnterior() {
    const resultado = document.getElementById("resultado");

    if (resultado !== undefined && resultado !== null) {
        const text = resultado.innerText;
        let numero = Number(text);
        numero -= 1;
        resultado.innerText = numero.toString().padStart(2, '0');
    };
};

function cambiarResultadoSiguiente() {
    const resultado = document.getElementById("resultado");

    if (resultado !== undefined && resultado !== null) {
        const text = resultado.innerText;
        let numero = Number(text);
        numero += 1;
        resultado.innerText = numero.toString().padStart(2, '0');
    };
};

function cambiarResultadoReset() {
    const resultado = document.getElementById("resultado");

    if (resultado !== undefined && resultado !== null) {
        const text = resultado.innerText;
        let numero = Number(text);
        numero = 0;
        resultado.innerText = numero.toString().padStart(2, '0');
    }
};

function cambiarResultado(idUsuario : string) {
    const resultado = document.getElementById("resultado");
    const usuario = document.getElementById(idUsuario) as HTMLInputElement;

    if (resultado !== undefined && resultado !== null && 
        usuario !== undefined && usuario !== null) {
        let numero = Number(usuario.value)
        resultado.innerText = numero.toString().padStart(2, '0')
    }
};





const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");
const botonReset = document.getElementById("reset");
const aceptar = document.getElementById("aceptar");
const usuario = document.getElementById("userNumber");

if (botonAnterior !== undefined && botonAnterior !== null) {
    botonAnterior!.addEventListener("click", () => {
        cambiarResultadoAnterior();
    });
};

if (botonSiguiente !== undefined && botonSiguiente !== null) {
    botonSiguiente!.addEventListener("click", () => {
        cambiarResultadoSiguiente();
    })
;}

if (botonReset !== undefined && botonReset !== null) {
    botonReset!.addEventListener("click", () => {
        cambiarResultadoReset();
    })
}

if (aceptar !== undefined && aceptar !== null) {
    aceptar.addEventListener("click", () => {
        cambiarResultado("userNumber")
    })
}

