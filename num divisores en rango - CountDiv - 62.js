function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var cont = 0;
    var increase = 1;
    if(K%2==0){ //if even don't look over the whole array
        
        if(A%2!=0){ //if odd
            A++;
        }
        increase = 2;
    }
    while (A<=B) {

        if(A % K == 0){
            cont++;
        }
        A+=increase;

    }
    return cont;
}