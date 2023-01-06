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






let proteina

function verdinho1(){
    document.getElementById("pr1").style.borderColor = "#32B72F";
    document.getElementById("pr2").style.borderColor = "white"; 
    document.getElementById("pr3").style.borderColor = "white";
    
    proteina ="op1";


}

function verdinho2(){
    document.getElementById("pr2").style.borderColor = "#32B72F";
    document.getElementById("pr1").style.borderColor = "white"; 
    document.getElementById("pr3").style.borderColor = "white";
    
    proteina ="op2";

} 


function verdinho3(){
    document.getElementById("pr2").style.borderColor = "white"; 
    document.getElementById("pr1").style.borderColor = "white"; 
    document.getElementById("pr3").style.borderColor = "#32B72F"; 
    
    proteina ="op3";

} 
let bebida

function verdinho4(){
    document.getElementById("bb1").style.borderColor = "#32B72F";
    document.getElementById("bb2").style.borderColor = "white"; 
    document.getElementById("bb3").style.borderColor = "white"; 
    bebida ="op4"
}

function verdinho5(){
    document.getElementById("bb1").style.borderColor = "white"; 
    document.getElementById("bb2").style.borderColor = "#32B72F";
    document.getElementById("bb3").style.borderColor = "white"; 
    bebida ="op5"     
} 


function verdinho6(){
    document.getElementById("bb1").style.borderColor = "white"; 
    document.getElementById("bb2").style.borderColor = "white"; 
    document.getElementById("bb3").style.borderColor = "#32B72F";
    bebida ="op6"
} 

let doce

function verdinho7(){
    document.getElementById("sb1").style.borderColor = "#32B72F";
    document.getElementById("sb2").style.borderColor = "white"; 
    document.getElementById("sb3").style.borderColor = "white"; 
    doce ="op7"
    
}

function verdinho8(){
    document.getElementById("sb1").style.borderColor = "white"; 
    document.getElementById("sb2").style.borderColor = "#32B72F";
    document.getElementById("sb3").style.borderColor = "white";
    doce ="op8"      
} 


function verdinho9(){
    document.getElementById("sb1").style.borderColor = "white"; 
    document.getElementById("sb2").style.borderColor = "white"; 
    document.getElementById("sb3").style.borderColor = "#32B72F";
    doce ="op9"
} 




    
