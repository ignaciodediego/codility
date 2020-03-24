function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if(A.length == 0 || A.length == 1){return 0;}
    
    var min = A[0];
    var maxP = 0;
    var subtrac;
    
    for(var i=1; i<A.length; i++){
        
        subtrac = A[i] - min;
        if(subtrac > maxP){ maxP = subtrac; }
        if(A[i] < min){ min = A[i]; }
        
    }
    return maxP;
}