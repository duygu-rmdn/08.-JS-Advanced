function solve(array) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = array.filter((el) =>{
        if(el >= biggest){
            biggest = el;
            return true;
        }
        return false;
    })
    return result;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);