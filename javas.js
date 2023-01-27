  let pra , beb , sob;
  let pi1 , pi2 , pi3;
 let somar =0;
let prato
function verdinho(escolhe) {
    prato = escolhe.innerHTML;
    const outro = document.querySelector(".proteinasfrango .borda ");
    if (outro !== null) {
        outro.classList.remove("borda");
    }
    escolhe.classList.add("borda");
    
    pra= escolhe.querySelector('.titulo h1').innerHTML;
    pi1= escolhe.querySelector('.preco p').innerHTML;
console.log(pi1 ,' valor1')
console.log(pra)
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
    beb= escolhe.querySelector('.titulo h1').innerHTML;
    pi2 = escolhe.querySelector('.preco p').innerHTML;
    console.log(pi2)
console.log(beb)
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
    sob = escolhe.querySelector('.titulo  h1').innerHTML;
    pi3= escolhe.querySelector('.preco p').innerHTML;

    console.log(pi3)
console.log(sob)
    
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

function agorafecha(){
  /*  pi1= document.querySelector(".proteinasfrango .preco p").innerHTML;
    pi2= document.querySelector(".bebidas .preco p").innerHTML;
    pi3= document.querySelector(".pudim .preco p").innerHTML;*/

    pi1 = pi1.replace('R$','');
    pi1 = pi1.replace(',','.');
    pi1= Number(pi1);

    pi2 =pi2.replace('R$','');
    pi2 = pi2.replace(',','.');
    pi2= Number(pi2);

    pi3 =pi3.replace('R$','');
    pi3 =pi3.replace(',','.');
    pi3= Number(pi3);

    somar = pi1 + pi2 + pi3
    console.log(somar)

/* pra= document.querySelector(".proteinasfrango .titulo h1").innerHTML;
  beb= document.querySelector(".bebidas h1").innerHTML;
 sob= document.querySelector(".pudim  h1").innerHTML;
  console.log(pi1,' pi1')*/
  return encodeURIComponent(
    `
   Olá, gostaria de fazer o pedido:
  - Prato: ${pra}
  - Bebida: ${beb}
  - Sobremesa: ${sob}
  Total: ${somar.toFixed(2)}
  `);
  
}
function clique() {
    let ultima= agorafecha();
    window.open(`https://api.whatsapp.com/send?phone=5521999999999&text=${ultima}`);
}

