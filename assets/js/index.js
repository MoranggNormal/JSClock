const data = new Date()
const week_days = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SABADO'] 

function clock(hour, minutes, seconds) {
    hour = data.getHours()
    hour = hour < 10 ? '0' + hour : hour;

    minutes = data.getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes;

    seconds = data.getSeconds()
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const show_clock = document.getElementById('display-clock').innerHTML = `${hour}:${minutes}:${seconds}`;
}

function yymmdd(year, month, date){
    date = data.getDate()
    date = date < 10 ? '0' + date : date;

    month = data.getMonth() + 1 // months in JS start in 0 so we must add +1
    month = month < 10 ? '0' + month : month;

    year = data.getFullYear()
    
    const show_yymmdd = document.getElementById('display-year').innerHTML = `${date}-${month}-${year}`
}

function show_day(day){
    day = date.getDate
    const show_date = document.getElementById('display_date').innerHTML = day[week_days];
}

setInterval(clock, 1000)
setInterval(yymmdd, 1000)
setInterval(show_day, 1000)
