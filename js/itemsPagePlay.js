var botonDesistir = document.querySelector("#desist");
var botonNew = document.querySelector("#new");
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");	

var pizarron = new Image();

let words = ['JAVA', 'TELEFONO', 'COMPUTADORA', 'LATAM', 'ARGENTINA', 'BRASIL', 'CHILE', 'HIPERTEXT', 'LANGUAGE', 'STYLE', 'SHEETS'];
let jugadas = [];


desist.addEventListener("click", function (event) {
    event.preventDefault();

    page3.forEach(function(userItem) {
        
        userItem.style.visibility = "hidden";
      });
    page1.forEach(function(userItem) {
        
        userItem.style.visibility = "visible";
      });
    
})

botonNew.addEventListener("click", function (event) {
    event.preventDefault();
    let sw = secretWord();

    makeGuiones(sw.length);



    console.log(sw+" tamaño palabra: "+sw.length);
        
})



function secretWord() {

  let nro = Math.trunc((Math.random()*100) % words.length);
  
  return words[nro];

}

function makeGuiones(params) {

  let x = 100;
  let y = 350;
  
 
  pincel.clearRect(0,0,750,400);

  pizarron.src = "img/pizarra1.png"; 
  pincel.drawImage(pizarron, 0, 0, 750, 400);

  pincel.fillStyle = "white";
  

  for (let index = 0; index < params; index++) {
    
    pincel.fillRect(x + (index *x/2), y, 40, 5);
  }

  
  
}

window.onload = init();

function init() {
  var canvas = document.getElementById("canvas");
      if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");
        if (ctx) {
            var img=new Image();
            img.src = "img/pizarra1.png";
            img.onload = function() {
            ctx.drawImage(this, 0, 0, 750, 400);
            }
         }
      }
  
  }

