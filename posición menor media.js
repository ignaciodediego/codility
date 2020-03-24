function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var add;
    var min = A[0] + A[1];
    var pos = 0;
    
    for(var i=1; i<A.length-1; i++){
        
        add = A[i] + A[i+1];
        if(add < min){
            
            min = add;
            pos = i;
        }
    }
    return pos;
    
}