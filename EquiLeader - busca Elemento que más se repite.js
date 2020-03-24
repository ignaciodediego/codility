function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 1){ return 0;}
    
    var count = 0;
    var part1 = [];
    var part2 = []
    
    for(var i=0; i<A.length; i++){
        
        part1 = A.slice(0, i+1);       
        part2 = A.slice(i+1);
        
        if(leader(part1) < 1000000001 && leader(part1) == leader(part2)){
            count++;
        }
    }
    return count++;
}

function leader(p){
    
    if(p.length == 1){return p[0];}
    
    var leader = 1000000001;
    //var max = 0;
    
    for(var i=1; i<p.length; i++){

        if(timesR(p,p[i]) > timesNR(p,p[i])){
            
            leader = p[i];
            break;
        }
        
    }   
    return leader;
}

function timesNR(p,num){

    var cont = 0;
    for(var i=0; i<p.length; i++){
 
         if(p[i] != num){
            cont++;
         }
    }
    return cont;
}

function timesR(p,num){

    var cont = 0;
    for(var i=0; i<p.length; i++){
 
         if(p[i] == num){
            cont++;
         }
    }
    return cont;
}
