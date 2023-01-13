let prato
function verdinho(escolhe) {
    prato = elemento.innerHTML;
    const outro = document.querySelector(".proteinasfrango .borda ");
    if (outro !== null) {
        outro.classList.remove("borda");
    }
    escolhe.classList.add("borda");

    vaifechar();
}
let bebida
function verdinho2(escolhe) {
    bebida = elemento.innerHTML;
    const outro2 = document.querySelector(".bebidas .borda2 ");
    if (outro2 !== null) {
        outro2.classList.remove("borda2");
    }
    escolhe.classList.add("borda2");
    
    vaifechar();
}

let doces
function verdinho3(escolhe) {
    doces = elemento.innerHTML;  
    const outro3= document.querySelector(".pudim .borda3 ");
    if (outro3 !== null) {
        outro3.classList.remove("borda3");
    }
    escolhe.classList.add("borda3");
    
    vaifechar();
}

function vaifechar(){
    
    let botaoVerde = document.querySelector(".botao");
    let textobotao = document.querySelector(".botao p");
     if(prato && bebida && doces){
         botaoVerde.classList.add("selecionado-botao");
         textobotao.innerHTML = 'Fechar pedido';
    } 
  }  
  let precoPrato = 0;
let precoBebida = 0;
let precoDoces = 0;
let valorfinal = 0; 
let precofinal = 0;
let msgfinal = "";


  function enviamsg() {
    let texto = meuPedido();
    
    window.open(`https://api.whatsapp.com/send?phone=5522999686953&text=${texto}`);
    }
    function meuPedido(){
        let valorPrato = document.querySelector(".pratos .selecionado .preco p");
        let  valorBebida = document.querySelector(".bebidas .selecionado .preco p"); 
        let  valorDoce = document.querySelector(".doces .selecionado .preco p");
    
        let pedidoPrato = document.querySelector(".pratos .selecionado h1").innerHTML;
        let pedidoBebida = document.querySelector(".bebidas .selecionado h1").innerHTML;
        let pedidoDoce = document.querySelector(".doces .selecionado h1").innerHTML;
        
        valorPrato = valorPrato.innerHTML;
        precoPrato = Number (valorPrato);
    
        valorBebida = valorBebida.innerHTML;
        precoBebida = Number (valorBebida); 
    
        valorDoce = valorDoce.innerHTML;
        precoDoces = Number (valorDoce); 
    
        valorfinal = (precoPrato + precoBebida + precoDoces);
        precofinal = valorfinal.toFixed(2);
    
        return encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
        - Prato: ${pedidoPrato} \n
        - Bebida: ${pedidoBebida} \n
        - Sobremesa: ${pedidoDoce}\n
        Total: R$ ${precofinal}`);
    }