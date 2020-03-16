// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var mayorValor = mayorValorF(A);
    var resultado = 0;
    
    if(mayorValor < 1){
        
        resultado = 1;
    }else{
        
        for(var i=1; i<mayorValor+1; i++){
            //console.log('Step 1: i es '+i+' la funcion da'+existe(i,A));
            if(!existe(i,A)){
               // console.log('Step 2: i es '+i+' la funcion da'+existe(i,A));
                resultado = i;
                break;
            }
        }
        if(resultado == 0){
            resultado = mayorValor +1;

        }
    }
    return resultado;
}

function mayorValorF(lista){
    
    var auxiliar = lista[0];
    for(var i=0; i<lista.length; i++){
        if(lista[i] > auxiliar){
            
            auxiliar = lista[i];
            
        }
    }
    return auxiliar;
    
}

function existe(num,lista){
    
    var resultado = false;
    for(var i=0; i<lista.length; i++){
        if(lista[i] == num){
            
            resultado = true;
            break;
        }
    }
    return resultado;
}