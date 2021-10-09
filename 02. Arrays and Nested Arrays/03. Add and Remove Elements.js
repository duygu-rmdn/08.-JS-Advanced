function solve(array) {
    let result = [];
    let number = 1;
    array.forEach(element => {
        if (element == 'add') {
            result.push(number);
        }
        else{
            result.pop();
        }
        number++;
    });
    if(result.length == 0){
        console.log('Empty');
        return;
    }
    console.log(result.join('\n'));
}