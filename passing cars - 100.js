function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var num = 1;
    var cont = 0;
    //var fCar = A[0];
    var initPos = A.indexOf(0)>-1 ? A.indexOf(0)+1 : -1;
    //var pCar = (fCar == 0) ? 1 : 0;
    if(initPos == -1) return 0;
    if(A[initPos] == null) return 0;
    for(var i=initPos; i<A.length; i++){
        
         if(A[i] == 1){
             cont = cont + num;
         }else{
             num++;
         }
    }
    if(cont > 1000000000){cont = -1;}
    return cont;
}