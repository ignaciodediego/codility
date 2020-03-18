// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //var valor = -1;
    A.sort();
    var i = 0;
    if(A.length == 1){
        return A[0];
    }else{
        while (i<A.length-2) {
    
            if(A[i] == A[i+1]){
                i += 2;
            }else{
                return A[i];
            }
        }
    }
    return A[A.length-1];
}