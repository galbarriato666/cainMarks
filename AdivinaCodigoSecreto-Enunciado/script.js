//Umar Mohammad Riaz    1rB ASIXc

const codigo = [];

var contador = 0

const intentosFijos = 5 //Refractor de intentos por intentosFijos para que el usuario no los elija.
var intentos = parseInt(window.prompt("¿Cuántos intentos quieres hacer? "))
var intentosRealizados = 0


//Comprobamos que el num de intentos es un digito
if (parseInt(intentos) != intentos){
    if(!alert("¡Debes introducir un número!\nEjemplo: 5")){window.location.reload();}
}


/*1. Genera una constante CODIGO_SECRETO de tipo array de 5
Número aleatorios entre 0 y 9 usando la libreria Math.random();*/

function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(Math.floor([1 ,2,3,4]));
    console.log(codigo)
}


function Comprobar(){
    var numeroIntroducido = document.getElementById("numero").value;
    intentosRealizados ++
    if (numeroIntroducido.length != 5){
        alert("¡Debes poner 5 dígitos!")

    }
    else{
        if (intentos > 0){
            confirmarComprobación(numeroIntroducido)
            contarNum(numeroIntroducido)
            document.getElementById("info").textContent = "Intentos restantes: " + Number(intentos - 1)
            if (AciertosTotales(numeroIntroducido) == "true"){
                intentos = 0;
                document.getElementById("info").textContent = "¡HAS GANADO! :)"
                document.getElementById("info").parentNode.style.backgroundColor = "green"
            }
        }
        else{
            document.getElementById("info").textContent = "¡HAS PERDIDO! :("
            numerosFallidos(codigo)
        }
        intentos = intentos -1
    }
}


function contarNum(numeros){
    for (numero of numeros){
        var cantidadDeNumeros = 0
        for (i=0;i<5;i++){
            if(numero == codigo[i]){
                cantidadDeNumeros = cantidadDeNumeros + 1
            }
        }
        if (cantidadDeNumeros > 0){
            console.log("El número ",numero," aparece",cantidadDeNumeros," veces")
        }
    }
}


function confirmarComprobación(numeros){
    for (i=0;i<5;i++){
        if (numeros[i] == codigo[i]){
            document.getElementById("codigo").children[0].children[i].children[0].textContent = codigo[i]
        }
    }
    numerosAcertados(numeros)

}


function numerosAcertados(numero){
    document.getElementById("Result").innerHTML += "<div class='rowResult w100 flex wrap'>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n<div class='w20'>\n<div class='celResult flex'></div>\n</div>\n</div>"
    for (i=0;i<5;i++){
        document.getElementById("Result").children[contador].children[i].children[0].textContent = numero[i]
        if (numero[i] == codigo[i]){
            document.getElementById("Result").children[contador].children[i].children[0].style.backgroundColor ="green"
        }
        else if (codigo.includes(parseInt(numero[i]))== true){
            document.getElementById("Result").children[contador].children[i].children[0].style.backgroundColor ="yellow"
        }
        else{
            document.getElementById("Result").children[contador].children[i].children[0].style.backgroundColor ="red"
        }
    }
    contador += 1
}


function numerosFallidos(numero){
    document.getElementById("codigo").innerHTML = "<div class='w100 flex wrap'>\n<div class='w20'>\n<div class='cel flex'>"+ numero[0] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[1] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[2] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[3] +"</div>\n</div>\n<div class='w20'>\n<div class='cel flex'>"+ numero[4] +"</div>\n</div>\n</div>"
    for (i=0;i<5;i++){
        document.getElementById("codigo").children[0].children[i].children[0].style.backgroundColor = "red"
}
}


function AciertosTotales(numeros){
    let aciertos = 0
    for (i=0;i<5;i++){
        if (numeros[i] == codigo[i]){
            aciertos += 1
        }
    }
    if (aciertos == 5){
        return "true"
    }
}


function adivinaLaPosicion(){
    var posicion = window.prompt("Posición (0-4) ")
    var numero = window.prompt("Número de la posición " + posicion + " (0-9)")
    numero = parseInt(numero)
    if (numero == codigo[posicion]){
        alert("¡Has adivinado!")
    }
    else if(codigo.includes(numero) == false){
        alert("¡No está ese número!")
    }
    else{
        alert("¡Existe, peró en otra posición!")
    }
}


codigoSecreto();