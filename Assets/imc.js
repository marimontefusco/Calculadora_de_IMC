const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log("testando preventDefault()")
    
    const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    //console.log(altura); console.log(peso); 

    const imc = (peso / (altura * altura));
    //console.log(imc);

    const result = document.getElementById("result");
    result.innerHTML = `O valor do seu IMC é ${imc.toFixed(2).replace(".", ",")}.`   
});