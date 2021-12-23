function calcIMC(){
    
let form = document.querySelector("form");
let peso = document.querySelector("#input-weight");
let altura = document.querySelector("#input-height");
let resultado = document.querySelector("#resultado");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    let IMC = peso.value/(altura.value * altura.value).toFixed(2);

    if(peso.value == "" && altura.value == "" || isNaN(peso.value) && isNaN(altura.value)){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Peso e Altura inválidos</p>`
        resultado.style.backgroundColor = "#F07050"
    } else if(peso.value == "" || isNaN(peso.value)){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Peso inválido</p>`
        resultado.style.backgroundColor = "#F07050"
    } else if(altura.value == "" || isNaN(altura.value)){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Altura inválida</p>`
        resultado.style.backgroundColor = "#F07050"
    } else if(IMC < 18.5){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso)</p>`
        resultado.style.backgroundColor = "#754335"
    } else if(IMC >= 18.5 && IMC <= 24.9){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Peso normal)</p>`
        resultado.style.backgroundColor = "#99C3AC"
    } else if(IMC >= 25 && IMC <= 29.9){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)</p>`
        resultado.style.backgroundColor = "#FFC055"
    } else if(IMC >= 30 && IMC <= 34.9){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1)</p>`
        resultado.style.backgroundColor = "#E24922"
    } else if(IMC >= 35 && IMC <= 39.9){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2)</p>`
        resultado.style.backgroundColor = "#E24922"
    } else if(IMC > 40){
        resultado.style.display = "block"
        resultado.innerHTML = `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3)</p>`
        resultado.style.backgroundColor = "#E24922"
    }
})

}

calcIMC()