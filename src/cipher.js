const cipher = {
   // ...
  encode: function(claveParaCifrar,textoParaCifrar){
    if(claveParaCifrar!=0 && textoParaCifrar!= " " && claveParaCifrar!='' && textoParaCifrar!=""){
      let textoParaCifrarMayuscula = textoParaCifrar.toUpperCase();
      for ( let i = 0; i < textoParaCifrarMayuscula.length; i++){
        let formula = (textoParaCifrarMayuscula.charCodeAt(i)-65 + claveParaCifrar)%26 +65;
        textoParaCifrarMayuscula = textoParaCifrarMayuscula.split("");
        textoParaCifrarMayuscula[i] = String.fromCharCode(formula);
        textoParaCifrarMayuscula = textoParaCifrarMayuscula.join("");
      }
      if(textoParaCifrar == textoParaCifrar.toLowerCase()){
        return textoParaCifrarMayuscula.toLowerCase();
      }else{
        return textoParaCifrarMayuscula;
      }
    }
    else{
      console.toThrow(TypeError);
    } 
  },

 decode: function(claveParaDescifrar, textoParaDescifrar){
   if(claveParaDescifrar!=0 && textoParaDescifrar!=" " && claveParaDescifrar!='' && textoParaDescifrar!=""){
    let textoParaDescifrarMayuscula = textoParaDescifrar.toUpperCase();
     for( let i = 0; i < textoParaDescifrarMayuscula.length; i++){
       let formula = (textoParaDescifrarMayuscula.charCodeAt(i)-65 - claveParaDescifrar)%26 +65;
       textoParaDescifrarMayuscula = textoParaDescifrarMayuscula.split("");
       if(formula < 65){
         textoParaDescifrarMayuscula[i] = String.fromCharCode(formula+26);
       }else{
         textoParaDescifrarMayuscula[i] = String.fromCharCode(formula);
        }
        textoParaDescifrarMayuscula = textoParaDescifrarMayuscula.join("");
      }
      if(textoParaDescifrar==textoParaDescifrar.toLowerCase()){
        return textoParaDescifrarMayuscula.toLowerCase();
      }else{
        return textoParaDescifrarMayuscula;
      }
    }
    else{
      console.toThrow(TypeError);
    }
  }

}

export default cipher;


