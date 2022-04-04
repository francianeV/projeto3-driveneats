let plate; //guarda informação do prato escolhido
let valuePlate; //guarda valor do prato escolhido

function escolherPrato(prato){
    const pratoSelecionado = document.querySelector(".selected-plate");
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selected-plate");

    }

    prato.classList.add("selected-plate");


    let isFrango = prato.classList.contains("frango");
    let isSushi = prato.classList.contains("sushi");
    let isHamburguer = prato.classList.contains("hamburguer");
    let isSalada = prato.classList.contains("salada");
    let isPronto = prato.classList.contains("pronto");

    if(isFrango === true){
        plate = "Frango Ying Yang";
        valuePlate = 14.90;

    }else if(isSushi === true){
        plate = "Combo Sushi";
        valuePlate = 20.90;

    }else if(isHamburguer === true){
        plate = "Hamburguer";
        valuePlate = 18.00;

    }else if(isSalada){
        plate = "Salada";
        valuePlate = 15.90;

    }else if(isPronto){
        plate = "Prato feito";
        valuePlate = 22.90;

    }else{
        plate = "Vazio";
        valuePlate = 0;
    }

    if(plate && drink && dessert){
        document.querySelector(".gray-button").classList.add("hidden");
        document.querySelector(".finish-order").classList.remove("hidden");

    }
}

let drink; //guarda informações da bebida escolhida
let valueDrink; //guarda informações do valor 

function escolherBebida(bebida){
    const bebidaSelecionada = document.querySelector(".selected-drink");
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("selected-drink");
    }

    bebida.classList.add("selected-drink");

    let isCoca = bebida.classList.contains("coca");
    let isGuarana = bebida.classList.contains("guarana");
    let isKuat = bebida.classList.contains("kuat");
    let isGarafa = bebida.classList.contains("garafa");
    let isSuco = bebida.classList.contains("suco");

    if(isCoca === true){
        drink = "Coca-Cola";
        valueDrink = 5.00;

    }else if(isGuarana === true){
        drink = "Guarana Antartica";
        valueDrink = 6.00;

    }else if(isKuat === true){
        drink = "Kuat Guarana";
        valueDrink = 9.00;

    }else if(isGarafa){
        drink = "Coca 2L";
        valueDrink = 12.00;

    }else if(isSuco){
        drink = "Suco natural";
        valueDrink = 8.00;

    }else{
        drink = "Vazio";
        valueDrink = 0;
    }

    if(plate && drink && dessert){
        document.querySelector(".gray-button").classList.add("hidden");
        document.querySelector(".finish-order").classList.remove("hidden");

    }
}

let dessert;
let valueDessert;

function escolherSobremesa(sobremesa){
    const sobremesaSelecionada = document.querySelector(".selected-dessert");
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("selected-dessert");
    }

    sobremesa.classList.add("selected-dessert");

    let isPudim = sobremesa.classList.contains("pudim");
    let isSorvete = sobremesa.classList.contains("sorvete");
    let isBrownie = sobremesa.classList.contains("brownie");
    let isCupcake = sobremesa.classList.contains("cupcake");
    let isTiramisu = sobremesa.classList.contains("tiramisu");

    if(isPudim === true){
        dessert = "Pudim";
        valueDessert = 7.90;

    }else if(isSorvete === true){
        dessert = "Taça de Sorvete";
        valueDessert = 15.00;

    }else if(isBrownie === true){
        dessert = "Brownie";
        valueDessert = 9.90;

    }else if(isCupcake){
        dessert = "Cupcake";
        valueDessert = 5.90;

    }else if(isTiramisu){
        dessert = "Tiramisu";
        valueDessert = 11.90;

    }else{
        dessert = "Vazio";
        valueDessert = 0;
    }

    if(plate && drink && dessert){
        document.querySelector(".gray-button").classList.add("hidden");
        document.querySelector(".finish-order").classList.remove("hidden");

    }

}
let totCompra = 0;
function sendOrder(){
    const nome = prompt("Qual o seu nome? ");
    const endereco = prompt("Forneça o endereço de entrega: ")

    const uri = `Olá, gostaria de fazer o pedido:
    - Prato: ${plate}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
    Total: R$: ${totCompra.toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}`

    window.open("https://wa.me/5512996768941?text=" + encodeURIComponent(uri));

}

function cancelaPedido(){
    let revisao = document.getElementById("revisao");
    revisao.style.display = "none";
  }


function finishOrder(){
    totCompra = valueDessert + valueDrink + valuePlate;
    let revisao = document.getElementById("revisao");
    revisao.style.display = "block";

    document.querySelector(".prato-selecionado").innerHTML = plate;
    document.querySelector(".valor-prato").innerHTML = valuePlate.toFixed(2);
  
    document.querySelector(".bebida-selecionada").innerHTML = drink;
    document.querySelector(".valor-bebida").innerHTML = valueDrink.toFixed(2);
  
    document.querySelector(".sobremesa-selecionada").innerHTML = dessert;
    document.querySelector(".valor-sobremesa").innerHTML = valueDessert.toFixed(2);
  
    document.querySelector(".valor-total").innerHTML = totCompra.toFixed(2);

}
