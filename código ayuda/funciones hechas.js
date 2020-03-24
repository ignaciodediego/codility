function isPrimeN(num){ //saber si número es primo y contar número de divisores que tiene

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