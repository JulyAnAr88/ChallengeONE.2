var canva = document.querySelector("canvas");
var pincel = canva.getContext("2d");
var drawColor = "white";
var backgroundColor = "#EFF1FA";
var pizarron = new Image();
var stroke = 4;

var x = 100;
var y = 350;   

window.addEventListener("load", function canvasSettings() {
    
    load();
});

function load(){
    init();
    canva.width = 750;
    canva.height = 400;
    cargarFondo(canva.width, canva.height)
}

function graphDrawing(request) {
    switch (request) {
        case 1:
            drawLine(305, 290, drawColor, stroke, 300, 45);
            break;
        case 2:
            drawLine(299, 46, drawColor, stroke, 440, 46)
            break;
        case 3:
            drawLine(439, 45, drawColor, stroke, 439, 70);
            break;
        case 4:
            drawCircle(440, 98, 26, drawColor);
            break;
        case 5:
            drawLine(440, 124, drawColor, stroke, 440, 236);
            break;
        case 6:
            drawLine(440, 124, drawColor, stroke, 390, 200);
            break;
        case 7:
            drawLine(440, 124, drawColor, stroke, 490, 200);
            break;
        case 8:
            drawLine(440, 235, drawColor, stroke, 390, 287);
            break;
        case 9:
            drawLine(440, 235, drawColor, stroke, 490, 287);
    }
    playSound(sounds[1]);
}

function makeGuiones(params) {
    pincel.clearRect(0,0,canva.width,canva.height);  
    pizarron.src = "img/pizarra1.png"; 
    pincel.drawImage(pizarron, 0, 0, canva.width, canva.height);  
    pincel.fillStyle = "white";

    var ancho = (canva.width/1.5)/params;
  
    for (let i = 0; i < params; i++) {
      
      pincel.fillRect(x + (i *ancho), y, 40, 4); //x/2
    } 
    
}

function escribirLetraCorrecta(palabraSecreta, index){
    pincel.font = '40px Inter';
    pincel.lineWidth = 5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "white";

    var ancho = canva.width/1.5/palabraSecreta.length;
    pincel.fillText(palabraSecreta[index], x + 10 + (ancho *index), (y-10));

}

function cargarFondo(width, height){
    var canvas = document.getElementById("canvas");
      if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");
        if (ctx) {
            var img=new Image();
            img.src = "img/pizarra1.png";
            img.onload = function() {
            ctx.drawImage(this, 0, 0, width, height);
            let palabra = secretWord(); 
            var ancho = (width/1.5)/palabra.length;
            ctx.fillStyle = "white";  
            for (let i = 0; i < palabra.length; i++) {      
                ctx.fillRect(x + (i *ancho), y, 40, 5);
            }
            setPalabraSecreta(palabra); 
            }
        }
    }
}

function drawCircle(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.stroke();
}

function drawRectangle(x, y, width, height, color) {
    pincel.fillStyle = color;
    pincel.fillRect(x, y, width, height);
}

function drawLine(x, y, color, stroke, xTo, yTo) {
    pincel.lineWidth = stroke;
    pincel.strokeStyle = color;
    pincel.moveTo(x, y);
    pincel.lineTo(xTo, yTo);
    pincel.stroke();
    pincel.closePath();
}

function clearCanvas() {
    canva.width = canva.width;
}
