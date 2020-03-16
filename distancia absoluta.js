function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arrayAuxiliar = new Array();
    var sumaTotal;
    var izquierda;
    var derecha;
    var arrayAuxiliar2;
    for(var i=1; i<A.length; i++){
        arrayAuxiliar2 = [...A];
        //console.log('arrayAuxiliar2 : '+arrayAuxiliar2[0]);
        //console.log('Izq : '+arrayAuxiliar2.splice(0,i));
        //console.log('Der : '+arrayAuxiliar2.slice(i-1,A.length));
        izquierda   = sumaElementos(arrayAuxiliar2.splice(0,i));
        derecha     = sumaElementos(arrayAuxiliar2.slice(0,A.length));
        //console.log('Izquierda : '+izquierda);
        //console.log('Derecha : '+derecha);
        sumaTotal   = Math.abs(izquierda - derecha);
        //console.log('resta absoluta : '+sumaTotal);
        arrayAuxiliar.push(sumaTotal);
        //console.log('array auxiliar : '+arrayAuxiliar);
        //console.log('A : '+A);
        //break;
    }
    //console.log('array auxiliar : '+arrayAuxiliar);
    //console.log('resultado : '+Math.min.apply(null, arrayAuxiliar))
    return Math.min.apply(null, arrayAuxiliar);
}

function sumaElementos(lista){
    //console.log('lista : '+lista);
    var suma = 0;
    for(var i=0; i<lista.length; i++){
        
        suma = suma + lista[i];
    }
    //console.log('suma : '+suma);
    return suma;
}