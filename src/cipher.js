const cipher = {
   // ...
  encode: function( claveParaCifrar,textoParaCifrar){

    if(claveParaCifrar!=0 && textoParaCifrar!= " " && claveParaCifrar!='' && textoParaCifrar!=""){
      for ( let i = 0; i < textoParaCifrar.length; i++){
        textoParaCifrar = textoParaCifrar.split("");
        textoParaCifrar[i] = String.fromCharCode((textoParaCifrar.charCodeAt(i)-65 + claveParaCifrar)%26 +65);
        textoParaCifrar = textoParaCifrar.join("");
      }
      return textoParaCifrar;
    }
    else{
      console.toThrow(TypeError);
    }
  }
 
};

export default cipher;

