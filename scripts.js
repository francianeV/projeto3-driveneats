
let escolha;

function escolherPrato(prato){
    let elemento = document.querySelector("h3");
    escolha = elemento.innerHTML;
    const pratoSelecionado = document.querySelector(".selecionado");
    if(pratoSelecionado !== null){
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");

}

function escolherBebida(bebida){
    const bebidaSelecionada = document.querySelector(".selecionado");
    if(bebidaSelecionada !== null){
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");

}

function escolherSobremesa(sobremesa){
    const sobremesaSelecionada = document.querySelector(".selecionado");
    if(sobremesaSelecionada !== null){
        sobremesaSelecionada.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado");

}

document.querySelector(".botao").disabled=true;

function finalizarPedido(){
    alert(escolha)

}
