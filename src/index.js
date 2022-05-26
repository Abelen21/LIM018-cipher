import cipher from './cipher.js';

const inputTexto = document.querySelector('#texto');
const inputClave = document.querySelector("#clave");
const resultado = document.querySelector("#resultado");

function btncifrar(){
    const textoCifrado = cipher.encode(String(inputTexto.value), parseInt(inputClave.value));
    resultado.value = textoCifrado;
}



console.log(cipher);
