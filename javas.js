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
  let pp = 0;
  let bb1 = 0;
  let pud1= 0;
  let somatudo= 0; 
  let vaimeufilho = 0;
  let aspas = "";

  function agorafecha(){
    let  p1  = document.querySelector(".proteinasfrango .borda  .preco p");
    p1 = p1 .innerHTML;
    pp= Number (p1);
    let pegatitulo1 = document.querySelector(".proteinasfrango .borda h1").innerHTML;

    let  p2 = document.querySelector(".bebidas .borda2 .preco p"); 
    p2= p2.innerHTML;
    bb1 = Number (p2); 
    let pegabebida1 = document.querySelector(".bebidas .borda2 h1").innerHTML;

    let  p3= document.querySelector(".pudim .borda3 .preco p");
    p3= p3.innerHTML;
    pud1 = Number (p3); 
    let pedapudim  = document.querySelector(".pudim .borda3 h1").innerHTML;

    somatudo = Number(pp) + Number(bb1) + Number(pud1)
    vaimeufilho = somatudo.toFixed(2);
    return encodeURIComponent(`Olá, gostaria de fazer o pedido:- Prato: ${pegatitulo1} - Bebida: ${pegabebida1}  - Sobremesa: ${pedapudim}
    Total: R$ ${somatudo}`);
    
}

function clique() {
let ultima= agorafecha();

window.open(`https://api.whatsapp.com/send?phone=5521999999999&text=${ultima}`);
}