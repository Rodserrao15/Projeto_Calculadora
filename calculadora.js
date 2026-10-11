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

function armazenarNumero(p){
    if(valores.length === 0){
        valores.push(p)
        visor.value = valores;
    }else{
        visor.value =+ p;
    }
}