function add(num){
    let sum = num;

    function add1(num2){
        sum += num2;
        return add1;
    }

    add1.toString = ()=> {
        return sum;
    }

    return add1;
}
console.log(add(1)(6)(-3).toString())