let prato
function verdinho(escolhe) {
    prato = escolhe.innerHTML;
    const outro = document.querySelector(".proteinasfrango .borda ");
    if (outro !== null) {
        outro.classList.remove("borda");
    }
    escolhe.classList.add("borda");

    vaifechar();
}
let bebida
function verdinho2(escolhe) {
    bebida = escolhe.innerHTML;
    const outro2 = document.querySelector(".bebidas .borda2 ");
    if (outro2 !== null) {
        outro2.classList.remove("borda2");
    }
    escolhe.classList.add("borda2");
    
    vaifechar();
}

let doces
function verdinho3(escolhe) {
    doces = escolhe.innerHTML;  
    const outro3= document.querySelector(".pudim .borda3 ");
    if (outro3 !== null) {
        outro3.classList.remove("borda3");
    }
    escolhe.classList.add("borda3");
    
    vaifechar();
}

function vaifechar(){
    
    let botaoVerde = document.querySelector(".continuar");
    let textobotao = document.querySelector(".continuar p");
     if(prato && bebida && doces){
         botaoVerde.classList.add("mudaDecor");
         textobotao.innerHTML = 'Fechar pedido';
    } 
  }  
  let precoPrato = 0;
  let precoBebida = 0;
  let precoDoces = 0;
  let valorfinal = 0; 
  let precofinal = 0;
  let msgfinal = "";

  function meuPedido(){
    let valorPrato = document.querySelector(".proteinasfrango .borda  .preco p");
    let  valorBebida = document.querySelector(".bebidas .borda2 .preco p"); 
    let  valorDoce = document.querySelector(".pudim .borda3 .preco p");


    let pedidoPrato = document.querySelector(".proteinasfrango .borda h1").innerHTML;
    let pedidoBebida = document.querySelector(".bebidas .borda2 h1").innerHTML;
    let pedidoDoce = document.querySelector(".pudim .borda3 h1").innerHTML;
    
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

function enviamsg() {
let texto = meuPedido();

window.open(`https://api.whatsapp.com/send?phone=5521999999999&text=${texto}`);
}