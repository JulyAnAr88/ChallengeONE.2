var texto = document.querySelector("#texto");
var save= document.querySelector("#save");
var cancel= document.querySelector("#cancel");
var page1 = document.querySelectorAll('.page-1');
/*var page2 = document.querySelectorAll('.page-2');
var page3 = document.querySelectorAll(".page-3");


save.addEventListener("click", function (event) {
    event.preventDefault();

    var verificar = verificarCaracteresProhibidos(texto.value);
    
    if (verificar){}

    page2.forEach(function(userItem) {
        
        userItem.style.visibility = "hidden";
      });
    page3.forEach(function(userItem) {
        
        userItem.style.visibility = "visible";
      });
    
})


cancel.addEventListener("click", function (event) {
    event.preventDefault();

    page2.forEach(function(userItem) {
        
        userItem.style.visibility = "hidden";
      });
    page1.forEach(function(userItem) {
        
        userItem.style.visibility = "visible";
      });
    
})
*/

function addWord(params) {

    if (params) {
      name
    }
    
  }


function verificarCaracteresProhibidos(textoAverificar) {

    var re = /[^a-zñ]/;
    
    array = textoAverificar.split(" ");
    
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (re.test(e)){
            alert("¡Máximo 8 letras y sin caracteres especiales!");
            
            return false;
        }else{
            return true;
        }
                  
    }


}