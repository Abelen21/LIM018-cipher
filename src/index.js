import cipher from './cipher.js';

const inputTexto = document.querySelector('#texto');
const inputClave = document.querySelector("#clave");
const resultado = document.querySelector("#resultado");
const btncifrar = document.querySelector('#cifrar');
const btndescifrar = document.querySelector('#descifrar');
// const resultado1 = document.querySelector('.resultado1');
const resultado2 = document.querySelector('.resultado2');



btncifrar.addEventListener('click',()=>{ 
    const textoCifrado = cipher.encode(parseInt(inputClave.value),inputTexto.value);
    resultado2.style.visibility = "visible";
    resultado.value = textoCifrado;
    inputTexto.value = '';
    inputClave.value = ''} )

btndescifrar.addEventListener('click',()=>{
    const textoDescifrado = cipher.decode(parseInt(inputClave.value),inputTexto.value);
    resultado.value = textoDescifrado;
    inputTexto.value = '';
    inputClave.value = '';
} )


/* function btncifrar(){
    const textoCifrado = cipher.encode((inputTexto.value), parseInt(inputClave.value));
    resultado.value = textoCifrado;
} */


// console.log(cipher);
