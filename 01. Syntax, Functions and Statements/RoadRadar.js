function radar(speed1, area) {
    let speed = Number(speed1);
    if (area == "motorway") {
        if (speed > 130) {
            overLimit(speed, 130);
        }
        else {
            console.log(`Driving ${speed} km/h in a 130 zone`)
        }
    }
    else if (area == "interstate") {
        if (speed > 90) {
            overLimit(speed, 90);
        }
        else {
            console.log(`Driving ${speed} km/h in a 90 zone`)
        }
    }
    else if (area == "city") {
        if (speed > 50) {
            overLimit(speed, 50);
        }
        else {
            console.log(`Driving ${speed} km/h in a 50 zone`)
        }
    }
    else if (area == "residential") {
        if (speed > 20) {
            overLimit(speed, 20);
        }
        else {
            console.log(`Driving ${speed} km/h in a 20 zone`)
        }
    }

    function overLimit(speed1, limite1) {
        let speed = Number(speed1);
        let limite = Number(limite1);
        let status;
        if (speed - limite > 40) {
            status = "reckless driving";
        }
        else if (speed - limite > 20) {
            status = "excessive speeding";
        }
        else {
            status = "speeding"
        }
        console.log(`The speed is ${speed - limite} km/h faster than the allowed speed of ${limite} - ${status}`);
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')