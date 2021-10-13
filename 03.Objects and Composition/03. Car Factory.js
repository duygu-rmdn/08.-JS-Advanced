function solve(obj) {
    let result = {};
    result.model = obj.model;
    result.engine = {};
    result.engine.power = obj.power;
    if (obj.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800
    } else if (obj.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400
    } else {
        result.engine.power = 200;
        result.engine.volume = 3500
    }
    result.carriage = {};
    result.carriage.type = obj.carriage;
    result.carriage.color = obj.color;
    const wheel = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    result.wheels = new Array(4).fill(wheel, 0, 4);
    return result;

}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 13
}
))