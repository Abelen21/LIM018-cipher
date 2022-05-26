import cipher from './cipher.js';

const inputTexto = document.querySelector('#texto');
const inputClave = document.querySelector("#clave");
const resultado = document.querySelector("#resultado");


const btncifrar = document.querySelector('#cifrar');
btncifrar.addEventListener('click',cifrar());

 
function cifrar(){
    const textoCifrado = cipher.encode(String(inputTexto.value), parseInt(inputClave.value));
    resultado.value = textoCifrado;
}



console.log(cipher);
