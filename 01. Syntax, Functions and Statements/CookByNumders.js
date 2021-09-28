function cook(num1, op1, op2, op3, op4, op5) {
    let num = Number(num1);
    let chop = function () {
        console.log(num / 2);
        num /= 2;
    }
    let dice = function () {
        console.log(Math.sqrt(num));
        num  = Math.sqrt(num);
    }
    let spice = function () {
        console.log(num + 1);
        num +=1;
    }
    let bake = function () {
        console.log(num *3);
        num *=3;
    }
    let fillet = function () {
        console.log(num - (num * 0.20));
        num -= (num * 0.20)
    }

    const array = [op1, op2, op3, op4, op5];
    array.forEach(element => {
        switch (element) {
            case "chop":
                chop();
                break;
            case "dice":
                dice();
                break;
            case "spice":
                spice();
                break;
            case "bake":
                bake();
                break;
            case "fillet":
                fillet();
                break;
        }
    });
}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');