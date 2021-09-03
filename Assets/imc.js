let altura = document.querySelector("altura")
let peso = document.getElementById("#peso")

function calculaIMC () {
    let imc = peso / (altura * altura)
    console.log(imc)
}