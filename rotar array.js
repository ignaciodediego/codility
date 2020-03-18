// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    for(var i=0;i<K;i++){
        rotarArray(A);
    }
    //console.log(A)
    return A;
}

function rotarArray(lista){
    
    var listaAuxiliar = [...lista];
    var posAnterior;
    for(var i=0;i<lista.length;i++){
        posAnterior = dameAnterior(lista.length, i);
        lista[i] = listaAuxiliar[posAnterior];
    }
}

function dameAnterior(longArray, pos){
    
    if(pos == 0){
        return longArray-1;
    }else{
        
        return pos-1;
    }
    
}