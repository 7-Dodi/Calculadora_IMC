function imc (peso, altura){
    let valor= peso/(altura*altura);
    return resposta(valor.toFixed(1));
}

function resposta (valor){
    if(valor< 18.5){
        return `Abaixo do peso, peso: ${valor}`;
    }
    else if(valor>= 18.5 && valor<= 24.9 ){
        return `Peso normal, peso: ${valor}`;
    }
    else if(valor>24.9 && valor <=29.9){
        return `Excesso de peso, peso: ${valor}`;
    }
    else if(valor>29.9 && valor <=34.9){
        return `Obesidade classe I, peso: ${valor}`;
    }
    else if(valor>34.9 && valor <=39.9){
        return `Obesidade classe II, peso: ${valor}`;
    }
    else if(valor>39.9){
        return `Obesidade classe III, peso: ${valor}`;
    }
}

const container= document.querySelector("#resp");
const button= document.querySelector("button");
button.addEventListener("click", () =>{
    const altura= document.querySelector("#altura").value;
    const peso= document.querySelector("#peso").value;
    const item= document.createElement("div");
    const texto= document.createElement("span");
    texto.textContent= imc(peso, altura);
    item.appendChild(texto);
    container.appendChild(item);
});