function attachEventsListeners() {

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit){
        const inDays = value / ratios[unit];

        return{
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function onClick(ev){
        const input = ev.target.parentElement.querySelector('input[type="text"]');

        const time = convert(Number(input.value), input.id);

        daysInput.value = time.days;
        minutesInput.value = time.minutes;
        hoursInput.value = time.hours;
        secondsInput.value = time.seconds;
    }
}