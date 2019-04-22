function time() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let translatedMonth = new Intl.DateTimeFormat('en', {
        month: "long"
    })
    let shortMonth = new Intl.DateTimeFormat('en', {
        month: 'short'
    })
    let translatedDay = new Intl.DateTimeFormat('en', {
        weekday: 'long'
    })
    let shortDay = new Intl.DateTimeFormat('en', {
        weekday: 'short'
    })
    let dTmy = new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let hm = new Intl.DateTimeFormat('en', {
        hour: 'numeric',
        minute: 'numeric'
    })
    let dmy = new Intl.DateTimeFormat('en', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    })
    let fullTime = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })

    let yearText = document.getElementById('year');
    let monthText = document.getElementById('month');
    let dayText = document.getElementById('day');
    let hourText = document.getElementById('hour');
    let minuteText = document.getElementById('minute');
    let secondText = document.getElementById('second');
    let translatedMonthText = document.getElementById('translated-month');
    let translatedDayText = document.getElementById('translated-day');
    let shortDayText = document.getElementById('short-day');
    let fullTimeText = document.getElementById('full-time');
    let dmyText = document.getElementById('dmy');
    let dTmyText = document.getElementById('dtmy');
    let hmText = document.getElementById('hm');
    let shortMonthText = document.getElementById('short-month');



    if (yearText) {
        yearText.innerText = year;
    }
    if (monthText) {
        monthText.innerText = month;
    }
    if (dayText) {
        dayText.innerText = day;
    }
    if (hourText) {
        hourText.innerText = hour;
    }
    if (minuteText) {
        minuteText.innerText = minute;
    }
    if (secondText) {
        secondText.innerText = second;
    }
    if (translatedDayText) {
        translatedDayText.innerText = translatedDay.format(new Date());
    }
    if (translatedMonthText) {
        translatedMonthText.innerText = translatedMonth.format(new Date());
    }
    if (shortDayText) {
        shortDayText.innerText = shortDay.format(new Date());
    }
    if (fullTimeText) {
        fullTimeText.innerText = fullTime.format(new Date());
    }
    if (dmyText) {
        dmyText.innerText = dmy.format(new Date());
    }
    if (dTmyText) {
        dTmyText.innerText = dTmy.format(new Date());
    }
    if (hmText) {
        hmText.innerText = hm.format(new Date());
    }
    if (shortMonthText) {
        shortMonthText.innerText = shortMonth.format(new Date());
    }

}
setInterval(time, 1000);