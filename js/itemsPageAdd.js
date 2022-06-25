var texto = document.querySelector("#texto");
var save= document.querySelector("#save");
var cancel= document.querySelector("#cancel");

function addWord(params) {
  verif = verificarCaracteresProhibidos(params)
  if (verif) {
    words.push(params.toUpperCase());
    popup("<h3>Palabra Agregada</h3>");
    cleanInput("#texto");
    init();
    } else {
      popup("<h3><span>&#129320;<span>¡Máximo 8 letras y sin caracteres especiales!</h3>");
      cleanInput("#texto");
  }
    
  }


function verificarCaracteresProhibidos(textoAverificar) {

    var re = /[^a-zñ]/;
    
    array = textoAverificar.split(" ");
    
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (re.test(e)){            
            return false;
        }else{
            return true;
        }
                  
    }


}