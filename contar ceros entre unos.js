function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var resultado = 0;
    var binario = N.toString(2);
    var corte;
    var posicion;
    var posicion2;
    //console.log('binario '+binario);
    while (binario.indexOf("0")>-1) { 
        posicion = binario.indexOf("0");
        //console.log('posicion '+posicion);
        corte = binario.slice(posicion, binario.length);
        //console.log('binario cortado '+corte);
        if(corte.indexOf("1")>-1){
            posicion2 = corte.indexOf("1");
            if(posicion2 > resultado){
                resultado = posicion2;
                //console.log('resultado '+resultado);
            }
            binario = corte.slice(posicion2, binario.length);;
            //console.log('binario final '+binario);
        }else{break;}
        
    }
    //console.log('resultado '+resultado);
    return resultado;
    
}