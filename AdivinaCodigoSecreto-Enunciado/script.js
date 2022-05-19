const code = [];

var count = 0

const fixed = 5 //Refactorizacion de intentos por numero fijo de chances para que el usuario no los pueda elegir.
var chances = parseInt(window.prompt("¿Cuántos intentos quieres hacer? "))
var donechances = 0


//Check integer
if (parseInt(chances) != chances){
    if(!alert("¡Debes introducir un número!\nEjemplo: 5")){window.location.reload();}
}


/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 números aleatorios entre 0 y 9 usando la libreria Math.random();*/

function CODIGO_SECRETO() {
    for (let i = 0; i < 5; i++) {
        code[i] = Math.floor((Math.random() * 10));
    }
    console.log(Math.floor([1 ,2,3,4]));
    console.log(code)
}


function Comprobar(){
    var numeroIntroducido = document.getElementById("numero").value;
    donechances ++
    if (numeroIntroducido.length != 5){
        alert("Tienes que introducir 5 dígitos numéricos!")

    }
    else{
        if (chances > 0){
            confirmingCheck(numeroIntroducido)
            countNum(numeroIntroducido)
            document.getElementById("info").textContent = "Remaining chances...: " + Number(chances - 1)
            if (TotalOKNumbah(numeroIntroducido) == "true"){
                chances = 0;
                document.getElementById("info").textContent = "GANASTE!"
                document.getElementById("info").parentNode.style.backgroundColor = "green"
            }
        }
        else{
            document.getElementById("info").textContent = "Oh you suck (perdiste)"
            failedNumbah(code)
        }
        chances = chances -1
    }
}


function countNum(numeros){
    for (numero of numeros){
        var cantidadDeNumeros = 0
        for (i=0;i<5;i++){
            if(numero == code[i]){
                cantidadDeNumeros = cantidadDeNumeros + 1
            }
        }
        if (cantidadDeNumeros > 0){
            console.log("El número ",numero," aparece",cantidadDeNumeros," veces")
        }
    }
}


function confirmingCheck(numeros){
    for (i=0;i<5;i++){
        if (numeros[i] == code[i]){
            document.getElementById("codigo").children[0].children[i].children[0].textContent = code[i]
        }
    }
    numerosAcertados(numeros)

}


function numerosAcertados(numero){ //parte vacía del html donde va metiendo los divs
    document.getElementById("Result").innerHTML += "<div class='rowResult w100 flex wrap'>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n</div>"
    for (i=0;i<5;i++){
        document.getElementById("Result").children[count].children[i].children[0].textContent = numero[i]
        if (numero[i] == code[i]){
            document.getElementById("Result").children[count].children[i].children[0].style.backgroundColor ="green"
        }
        else if (code.includes(parseInt(numero[i]))== true){
            document.getElementById("Result").children[count].children[i].children[0].style.backgroundColor ="yellow"
        }
        else{
            document.getElementById("Result").children[count].children[i].children[0].style.backgroundColor ="red"
        }
    }
    count += 1
}


function failedNumbah(numero){
    document.getElementById("codigo").innerHTML = "<div class='w100 flex wrap'>\n<div class='w20'>\n<div class='cel flex'>"+ numero[0] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[1] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[2] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[3] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[4] +"</div>\n</div>\n</div>"
    for (i=0;i<5;i++){
        document.getElementById("codigo").children[0].children[i].children[0].style.backgroundColor = "red"
}
}


function TotalOKNumbah(numeros){
    let aciertos = 0
    for (i=0;i<5;i++){
        if (numeros[i] == code[i]){
            aciertos += 1
        }
    }
    if (aciertos == 5){
        return "true"
    }
}


function guessLocation(){
    var posicion = window.prompt("Posición (0-4) ")
    var numero = window.prompt("Número de la posición " + posicion + " (0-9)")
    numero = parseInt(numero)
    if (numero == code[posicion]){
        alert("Lo adivinaste!")
    }
    else if(code.includes(numero) == false){
        alert("Ese número NO!")
    }
    else{
        alert("Número correcto pero posición incorrecta :/")
    }
}


CODIGO_SECRETO();