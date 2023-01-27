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
  return encodeURIComponent(`Olá, gostaria de fazer o pedido:\n
  - Prato: ${pegatitulo1} \n
  - Bebida: ${pegabebida1} \n
- Sobremesa: ${pedapudim}\n
  Total: R$ ${somatudo}`);

}
agorafecha()
function clique() {
let ultima= agorafecha();

window.open(`https://api.whatsapp.com/send?phone=5521999999999&text=${ultima}`);
}


function clique() { 
    const msg =
    `
        Olá, gostaria de fazer o pedido:
        - Prato: ${pra}
        - Bebida: ${beb}
        - Sobremesa: ${sob}
        Total: ${somar.toFixed(2)}
        
    `;
    console.log(msg);
    const msgWP = encodeURIComponent(msg);
    const linkWP = `https://wa.me/5599999999999?text=${msgWP}`;
    window.open= linkWP;
    agorafecha();
}
