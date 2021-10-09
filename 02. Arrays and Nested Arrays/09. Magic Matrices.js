function solve(matrix){

    var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
    var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
    for(let i = 0; i < rowSum.length - 1; i++){
        if(rowSum[i] != rowSum[i+1]){
            console.log(false);
            return;
        }
    }
    for(let i = 0; i < rowSum.length - 1; i++){
        if(colSum[i] != colSum[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
solve([[4, 5, 6]]
   )