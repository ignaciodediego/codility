// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var resultado = 0;
    A.sort(function (a,b){return a - b;});
    //console.log('A : '+A);
    var longi = A.length - 2;
    
    for(var i=0; i<longi; i++){
        
        if(((A[i] + A[i + 1]) - A[i + 2]) >= 1){
            
            resultado = 1;
            break;
        }
        
    }
    
    return resultado;
}