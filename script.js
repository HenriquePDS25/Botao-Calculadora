let modal = document.querySelector('.container');

function onOpen(){
    modal.classList.add('active');
}

function onClose(){
    modal.classList.remove('active');
}

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
                
    } else{
        window.alert ('Insira algum número!')
        
    }
}
