function solve(...arr){

    let map = new Map();

    arr.forEach(element => {
        let type = typeof(element);
        
        if(!map.has(type)){
            map.set(type, 0);
        }
        map.set(type, map.get(type)+1);
        console.log(`${type}: ${element}`)
    });
    [...map.entries()].sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}
solve('cat', 42,function () { console.log('Hello world!')}, 45);