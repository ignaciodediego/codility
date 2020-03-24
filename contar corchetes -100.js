Copiamos array
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    //var resultado = 1;
    var arrAux = [];
    var S_array = [];
    
    for(var j=0; j<S.length; j++){ //copiamos array
        S_array[j] = S[j];
    }
    
    for(var i=0; i<S_array.length; i++){
        
        if( isOpen(S_array[i]) ){
            
            arrAux.push(S_array[i]);
        }else{
            
            if(lastO(arrAux,S_array[i])){
                arrAux.pop();
                continue;
                
            }else{
                return 0;
            }
        }
        
    }
    
    return arrAux.length == 0 ? 1 : 0;
}

function isOpen(c){
    
    if( c == "(" || c == "{" || c == "["){return true;}
    else{return false;}
}

function lastO(A,v){
    
    if(v == ")"){
        if(A[A.length-1] == "("){
            return true;
        }
        
    }else if(v == "}"){
        if(A[A.length-1] == "{"){
            return true;
        }
        
    }else if(v == "]"){
        if(A[A.length-1] == "["){
            return true;
        }
    }
    return false;
}