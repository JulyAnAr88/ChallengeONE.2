var controlTouch = document.querySelector("#keyboard");
var element = document.querySelector("#wrongWord");
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");	
var intentos = [0, 0];
var gameState = false;
var words = ['JAVA', 'TELEFONO', 'COMPUTADORA', 'LATAM', 'ARGENTINA', 'BRASIL', 'CHILE', 'HIPERTEXT', 'LANGUAGE', 'STYLE', 'SHEETS'];
var word = "";
var palabraCorrecta = "";

var touchDevice = false;
var display = window.innerWidth;

if (display < 750) {
    touchDevice = true;
}

controlTouch.addEventListener("input", function(event) {
    if (touchDevice) {
        if (gameState) {
            var key = event['data'];
            var request = isRightLetter(key.toUpperCase());
            gameExecution(request, key.toLowerCase());
            cleanInput("#keyboard");
        }
    }
});

document.addEventListener('keydown', function gameController(event) {
    if (!touchDevice) {
        var specialKeyPress = teclasEspeciales(event['key'].toLowerCase());
        console.log(event['key']);
        if (!specialKeyPress) {
            if (gameState) {
                document.querySelector("#keyboard").value = event['key'];
                var key = document.querySelector("#keyboard").value;
                var esCorrecta = isRightLetter(key.toUpperCase());
                gameExecution(esCorrecta, key.toLowerCase());
                cleanInput("#keyboard");
            }
        }

    }
});

function secretWord() {

  let nro = Math.trunc((Math.random()*100) % words.length);  
  return words[nro];
}

function init() {
    endGame();
    gameState = true;
    pageChandler('.page_3');
    load();
    element.textContent = " ";

}
  
function endGame() {
  word = null;
  palabraCorrecta = null;
  intentos = ["", ""];
  gameState = false;
}

function gameExecution(correcta, key) {
  if (gameState) {
      var text = "";
      if (correcta) {
        agregarLetraCorrecta(word.indexOf(key.toUpperCase()));
        for (var i = 0; i < word.length; i++) {
            if(word[i]==key.toUpperCase()){
                escribirLetraCorrecta(word, i);
                text = text + key;              
            }
        }
        regLetters(text, 0);
        } else {
            regLetters(key, 1);
            element.textContent = (intentos[1].toUpperCase());
            graphDrawing(intentos[1].length);
        }
      
      if (intentos[1].length == 9) {
          popup("<h3><span>&#128531;</span> ¡Perdiste! Vuelve a intentarlo</h3>");
          endGame();
          playSound(sounds[2]);
      }
      if (intentos[0].length == word.length) {
          popup("<h3><span>&#129351;</span>¡Muy bien!¡Ganaste!</h3>");
          endGame();
          playSound(sounds[3]);
      }
  }
}

function agregarLetraCorrecta(i){
    palabraCorrecta += word[i].toUpperCase();
}

function isRightLetter(consulta) {
    var correcta = false;
    if (!verificarCaracteres(consulta)) {
        for (var i = 0; i < word.length; i++) {
            if (consulta == word[i]) {
                if (word[i] != intentos[0]) {
                    correcta = true;
                }
            }
        }
    }
    return correcta;
}

function teclasEspeciales(consulta) {
  var tecla = false;
  var specialKeys = ['contextmenu', 'control', 'tab', 'capslock', 'shift', 'alt', 'altgraph', 'enter', 'meta', 'dead', 'backspace', 'home', 'end', 'delete', 'pageup', 'pagedown', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'numlock', 'escape', 'pause', 'insert', 'scrolllock', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'];
  for (var i = 0; i < specialKeys.length; i++) {
      if (consulta == specialKeys[i] || verificarCaracteres(consulta)) {
          tecla = true;
      }
  }
  return tecla
}

function verificarCaracteres(letra) {
    var re = /[^a-zñA-ZÑ]/;
    var response = false;
    if (re.test(letra.charAt())) {
        response = true;
    }
    return response
}


function regLetters(request, type) {
    var response = false;
    if (intentos[type].length == 0) {
        
        intentos[type] = intentos[type] + "" + request;
        response = true;
    } else {
        var i = intentos[type].indexOf(request);
        if (i == -1) {
            intentos[type] = intentos[type] + "" + request;
            response = true;
        }
    }
    return response;
}

function setPalabraSecreta(palabra){
    word = palabra;
}