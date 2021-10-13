function rectangle(width, height, color){
    const colorToUperCase = color.charAt(0).toUpperCase() + color.slice(1);

    let obj = {
        width: width,
        height: height,
        color: colorToUperCase,
        calcArea(){
            return this.width * this.height;
        }
    }
    return obj
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
