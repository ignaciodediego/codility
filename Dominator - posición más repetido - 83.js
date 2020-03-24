// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(A.length == 1 ){return 0;}
    A.sort(function (a,b){ return a - b; });
    
    //var pivot = A[0];
    
    var aux = [];
    aux.push(A[0]);
    
    for(var i=1; i<A.length; i++){
        
        if(aux[aux.length - 1] == A[i]){
            
            aux.push(A[i]);
            if(aux.length > Math.floor(A.length/2) ){
                return i;
            }
            
        }else{
            aux.pop();
            aux.push(A[i]);
            //pivot = A[i];
        }
    }
    return -1
}