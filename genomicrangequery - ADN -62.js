// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var iFact = ["A","C","G","T"];
    var result = new Array();
    var auxList;
    
    for(var i=0; i<P.length; i++){
        auxList = [];
        if(P[i] > S.length-1 || Q[i] > S.length-1){continue;}
        
        for(var j=P[i]; j<Q[i]+1;j++){
            auxList.push(S[j]);
        }
        //console.log('pre auxList : '+auxList);
        auxList.sort();
        //console.log('post auxList : '+auxList);
        result.push(iFact.indexOf(auxList[0])+1);
    }
    return result;
}

//también 62
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //var iFact = [["A",1],["C",2],["G",3],["T",4]];
   // console.log('iFact : '+iFact[0][1]);
    var result = new Array();
    //var auxList;
    var min;
    
    for(var i=0; i<P.length; i++){
        //auxList = [];
        if(P[i] > S.length-1 || Q[i] > S.length-1){continue;}
        min = 4;
        //console.log('P : '+P[i]+' Q '+ Q[i]);
        for(var j=P[i]; j<=Q[i];j++){
           // console.log('pasa');
            if(S[j] == "A"){
                min = 1;
                break;
            }else if(S[j] == "C"){
                if(min > 2){min = 2;}
            }else if(S[j] == "G"){
                //console.log('pasa');
                if(min > 3){min = 3;}
            }else if(min > 4){min = 4;}
            
        }
        result.push(min);
    }
    return result;
}