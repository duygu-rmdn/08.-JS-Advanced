class Rectangle {
    constructor(width, height, color){
        this.color = color;
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
