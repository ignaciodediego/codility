function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var raiz = Math.sqrt(N);
    var min = Math.floor(raiz);
    var max = Math.ceil(raiz);
    
    if(isPrimeN(N)){

        return (N + 1) * 2;
    }

    while(min > 0){
        
        if(min * max == N){
            
            break;
        }else{
            
            if(min * max > N){ min--; }
            if(min * max < N){ max ++; }
        }
    }
    
    return (min + max) * 2;
}

function isPrimeN(num){

    var raiz = Math.sqrt(num);
    var min = Math.floor(raiz);
    var cont = 0;

    for(var i=1; i <= min; i++){

        if(num%i == 0){
            cont++;
            if(num/i != i){
                cont++;
            }
        }
        
    }
    return cont == 2 ? true : false;
}