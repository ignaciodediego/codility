function solution(N, A) {
    var counters = new Array(N).fill(0);
    for(var i=0; i<A.length; i++){
        
        if(A[i]<=N){
            counters[A[i]-1]++;
        }else{
            counters.fill(Math.max.apply(null, counters));
        }
    }
    return counters;
}