function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a,b){ return a - b; });
    
    var nOne    = A[A.length - 3];
    var nTwo    = A[A.length - 2];
    var nThree  = A[A.length - 1];
    var aux;
    var aux2 = nOne * nTwo * nThree;;
    
    var pBigger = bigNum(nOne, nTwo, nThree);
    
    if(A[0] < 0 && A[1] < 0){
        aux = A[0]*A[1]*pBigger;
         
        if(aux > aux2){
            aux2 = aux;
        }
    }
    return aux2;    
}

function bigNum(o, t, th){
    
    if (o > t && o > th){return o;}
    if (th > t && th > o){return th;}
    else return t;
    
}