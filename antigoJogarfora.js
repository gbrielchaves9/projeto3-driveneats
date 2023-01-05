let comida;
function verdinho(seletor){
    const outro = document.querySelector('.borda .comida ');
    if ( outro !==null)
    {outro.classList.remove('borda')}
    const botao = document.querySelector(seletor);
    botao.classList.toggle('borda');


    comida = botao.innerHTML;

    vaifechar();
    

}
let bebida ;
function verdinho2(seletor){
    const outro = document.querySelector('.borda2 .bebida ');
    if ( outro !==null)
    {outro.classList.remove('borda2')}
    const botao = document.querySelector(seletor);
    botao.classList.toggle('borda2');


    bebida = botao.innerHTML;

    vaifechar();


 
}
let sobremesa;

function verdinho3(seletor){
    const outro = document.querySelector('.borda3 .sobremesa');
    if ( outro !==null)
    {outro.classList.remove('borda3')}
    const botao = document.querySelector(seletor);
    botao.classList.toggle('borda3');


    sobremesa = botao.innerHTML;

    vaifechar();
    
}


function vaifechar(){


    if ( comida !== undefined){
        if ( bebida !== undefined){
            if ( sobremesa !== undefined){
                const botao = document.querySelector('.continuar');
                botao.innerHTML = "Fechar pedido" ;
        }
    }

}
}

    
