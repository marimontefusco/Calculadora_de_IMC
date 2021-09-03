const altura = parseFloat(document.querySelector("#altura").value.replace(",", "."));
const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));

const result = document.getElementById("result");

const button = document.getElementById("button");


button.addEventListener("click", (e) => {
    e.preventDefault;

    const imc = (peso / (altura * altura));
    console.log(altura);
    console.log(peso);
    console.log(imc);
    
    result.innerHTML = `O valor do seu IMC é ${imc.toFixed(2).replace(".", ",")}.`
});
