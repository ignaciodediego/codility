function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var min = 1;
    A.sort(function(a,b){
       // Sort the array explicit way
       return a - b; 
    });
    //A.sort();
    //console.log('A : '+A);
    for (var i in A) {
        if (A[i] == min) {
                min++;
        }else{return 0;}
    }

    return 1;
}