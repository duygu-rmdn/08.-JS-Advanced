function solve(input) {

    let obj = {};
    let result = {};

    for (let item of input) {
        let [juice, value] = item.split(' => ');

        if (!obj[juice]) {
            obj[juice] = Number(value);
            produceBottle(value, juice);
        }
        else {
            obj[juice] += Number(value);
            produceBottle(value, juice);
        }

    }

    function produceBottle(value, juice) {
        let currValue = obj[juice];
        while (currValue - 1000 >= 0) {
            currValue -= 1000;
            if(!result[juice]){
                result[juice] = 1;
            }
            else{
                result[juice]++;
            }
        }
        obj[juice] = currValue;
    }

    for(let [key, value] of Object.entries(result)){
        console.log(`${key} => ${value}`)
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
console.log('--------------')
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])