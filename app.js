function daysTick() {
    let prevDays = $('.days-number').text();
    if (prevDays != 0) {
        $('.days-number').text(prevDays - 1);
    }

    if (prevDays <= 10) {
        $('.days-number').text('0' + (prevDays - 1));
    }
}

function hoursTick() {
    let prevHours = $('.hours-number').text();
    if (prevHours == 0) {
        $('.hours-number').text(23);
        daysTick();
    }

    else if (prevHours <= 10) {
        $('.hours-number').text('0' + (prevHours - 1));
    }

    else {
        $('.hours-number').text(prevHours - 1);
    }
}

function minutesTick() {
    let prevMinutes = $('.minutes-number').text();
    if (prevMinutes == 0) {
        $('.minutes-number').text(59);
        hoursTick();
    }

    else if (prevMinutes <= 10) {
        $('.minutes-number').text('0' + (prevMinutes - 1));
    }

    else {
        $('.minutes-number').text(prevMinutes - 1);
    }
}

function secondsTick() {
    let prevSeconds = $('.seconds-number').text();
    if (prevSeconds == 0) {
        $('.seconds-number').text(59);
        minutesTick();
    }

    else if (prevSeconds <= 10) {
        $('.seconds-number').text('0' + (prevSeconds - 1));
    }

    else {
        $('.seconds-number').text(prevSeconds - 1);
    }
}

setInterval(() => {
    secondsTick();
}, 1000);