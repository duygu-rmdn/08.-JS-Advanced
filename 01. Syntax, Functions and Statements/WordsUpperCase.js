function words(input){
    let result = input.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");

  console.log(result);
} 
words("Hello");
words("How are you?")