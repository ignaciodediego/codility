function solution(A) {
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });
    //A.sort();
    //console.log('A : '+A);
    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}