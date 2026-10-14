let numeros = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");
let numero3 = document.querySelector("#num3");
let numero4 = document.querySelector("#num4");
let numero5 = document.querySelector("#num5");
let numero6 = document.querySelector("#num6");
let numero7 = document.querySelector("#num7");
let numero8 = document.querySelector("#num8");
let numero9 = document.querySelector("#num9"); 
let numero0 = document.querySelector("#num0");
let visor = document.querySelector("#visor");
let valores = [];
let operadores = [];
let teste = document.querySelector(".teste");
let teste1 = document.querySelector(".teste1");

function armazenarNumero(p){
    if(visor.value.length === 0){
        valores.push(p);
    } else {
        let posicao = valores.length - 1
        valores[posicao] += p;
    }
    teste.innerHTML = valores
    visor.value += p;
}
function somar(){
    if(visor.value.length !== 0 && visor.value.at(-1) !== " " ){
        visor.value += " + ";
        valores.push("");
        if(operadores.at(-1) !== "+" && operadores.includes("+") === false){
            operadores.push("+");
        }
    }
    teste1.innerHTML = operadores
}

function subtrair(){
    if(visor.value.length !== 0 && visor.value.at(-1) !== " " ){
        visor.value += " - ";
        valores.push("");
        if(operadores.at(-1) !== "-" && operadores.includes("-") === false){
            operadores.push("-");
        }
    }
    teste1.innerHTML = operadores
}

function multiplicar(){
    if(visor.value.length !== 0 && visor.value.at(-1) !== " " ){
        visor.value += " x ";
        valores.push("");
        if(operadores.at(-1) !== "x" && operadores.includes("x") === false){
            operadores.push("x");
        }
    }
    teste1.innerHTML = operadores
}

function dividir(){
    if(visor.value.length !== 0 && visor.value.at(-1) !== " " ){
        visor.value += " / ";
        valores.push("");
        if(operadores.at(-1) !== "/" && operadores.includes("/") === false){
            operadores.push("/");
        }
    }
    teste1.innerHTML = operadores
}

function apagarTudo(){
    visor.value = "";
    valores = [];
    operadores =[];
}
