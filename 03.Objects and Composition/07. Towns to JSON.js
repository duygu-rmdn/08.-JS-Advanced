function solve(arr){
    let result = [];
    const splited = arr[0].split('|');

    const town  = splited[1].trim();
    const latitude  = splited[2].trim();
    const longitude  = splited[3].trim();

    for (let i = 1; i < arr.length; i++) {
        const splitedEntry = arr[i].split('|');
        let obj = {};
        obj[town] = splitedEntry[1].trim();
        obj[latitude] = Number(Number(splitedEntry[2].trim()).toFixed(2));
        obj[longitude] = Number(Number(splitedEntry[3].trim()).toFixed(2));

        result.push(obj);
    }


    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])