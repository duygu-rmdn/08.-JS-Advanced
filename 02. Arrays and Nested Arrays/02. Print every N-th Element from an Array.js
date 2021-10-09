function print(array, steps){
    let result = [];
    for(let i = 0; i < array.length; i+=steps){
        result.push(array[i]);
    }
    return result;
}
print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)