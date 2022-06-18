var sounds = ["button.mp3", "error.mp3", "Lost.mp3", "Winner.mp3"];

function cleanInput(request) {
    var response = document.querySelector(request);
    response.value = "";
}

function popup(consulta) {
    if (consulta == false) {
        var response = document.querySelector("#popupMessages");
        response.style.display = "none";
    } else {
        var response = document.querySelector("#popupAlert");
        var popup = document.querySelector("#popupMessages");
        response.innerHTML = consulta;
        popup.style.display = "block";
    }
}

function playSound(request) {
    const music = new Audio("sounds/" + request);
    music.play();
}


function createElementHtml(request, id) {
    var response = document.createElement(request);
    if (id != false) {
        response.setAttribute('id', id);
    }
    return response;
}