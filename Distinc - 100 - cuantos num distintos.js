function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0){ return 0;}
    if(A.length == 1){ return 1;}
    
    A.sort(function(a,b){ return a - b; });
    var cont = 1;
    var aux = A[0];
    
    for(var i=1; i<A.length; i++){
        
        if(aux != A[i]){
            
            aux = A[i];
            cont++;
        }   
    }
    return cont;
}