// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = new Array();
    var auxList;
    
    for(var i=0; i<P.length; i++){
        //auxList = [];
        if(P[i] > S.length-1 || Q[i] > S.length-1){continue;}
        /*
        for(var j=P[i]; j<Q[i]+1;j++){
            auxList.push(S[j]);
        }*/
        auxList = S.slice(P[i], Q[i] + 1);
        
        if (auxList.indexOf('A') !== -1) {
			result.push(1)
		} else if (auxList.indexOf('C') !== -1) {
			result.push(2)
		} else if (auxList.indexOf('G') !== -1) {
			result.push(3)
		} else {
			result.push(4)
		}
    }
    return result;
}