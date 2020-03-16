function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var resultado;
    var N = A.length;
    if(A.length == 0){
        resultado = 1;
    }else{
        var sumaReal = dameSumaTotal(A);
        var sumaEsperada = ((N + 1)*(N + 2))/2;
        resultado = sumaEsperada - sumaReal;
    }
    return resultado;
}

function dameSumaTotal(A){
    
    var suma = 0;
    for(var i=0; i<A.length; i++){
        
        suma = suma + A[i];
        
    }
    return suma;
}