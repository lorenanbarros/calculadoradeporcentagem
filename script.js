const porcentagem = document.querySelector("div.container form input:nth-of-type(1)")
const valor = document.querySelector("div.container form input:nth-of-type(2)")
const calcular = document.querySelector("div.container div button")
var resultado = document.querySelector("div.container div span")

calcular.addEventListener("click", function(){

    if(porcentagem.value == "" || valor.value ==""){
        resultado.innerHTML = "Insira valores válidos!"
    }else{
        var calculo = Number(porcentagem.value) * Number(valor.value) / 100
        resultado.innerHTML = calculo
    }

})