function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    
    var aux = [];
    var counter = 0;
    for(var i=0; i<A.length; i++){
        
        aux[i] = getPoints(i, A[i]);
    }
    for(var j=0; j<aux.length; j++){
        
        counter += countI(aux, j);
    }
    if(counter > 10000000){ return -1;}
    return counter;
}

function getPoints(pos, radius){
    
    var arr = [];
    var point = pos - radius;
    var longi = 2 * radius;
    for(var z=0; z <= longi; z++){
        
        arr[z] = point;
        point++;
    }
    return arr;
}

function countI(list, pos){
    
    //var initN = pos + 1;
    var cont = 0;
    
    for(var y=pos + 1; y<list.length; y++){
        
        if(pCommon(list[pos], list[y])){cont++;}
    }
    return cont;
}

function pCommon(arr1, arr2){
    
    var resultado = false;
    var axis;
    var axis2;
    
    arr1.sort( function(a,b){return a - b;});
    arr2.sort( function(a,b){return a - b;});
    
    if(arr1.length < arr2.length){ 
        axis = arr1; //shorter
        axis2 = arr2; //bigger
    }else{ 
        axis = arr2; 
        axis2 = arr1;
    } 
    
    for(var t=0; t<axis.length; t++){
        
        if(axis2.indexOf(axis[t]) > -1){
            
            resultado = true;
            break;
        }
    }
    return resultado;
}