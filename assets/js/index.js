function display_clock_time() {
    let data = new Date()
    horas = data.getHours()
    horas = horas < 10 ? '0' + horas : horas;

    let minutos = data.getMinutes()
    minutos = minutos < 10 ? '0' + minutos : minutos;

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? '0' + segundos : segundos;

    let dia_numero = data.getDate()
    dia_numero = dia_numero < 10? '0' + dia_numero : dia_numero;

    let mes_numero = data.getMonth() + 1
    mes_numero = mes_numero < 10? '0' + mes_numero : mes_numero;

    let ano = data.getFullYear()


    let dia = data.getDate()
    let dias = ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SABADO']


    document.getElementById('display-clock').innerHTML = `${horas}:${minutos}:${segundos}`;
    document.getElementById('display-date').innerHTML = dias[dia];
    document.getElementById('display-year').innerHTML = `${dia_numero}-${mes_numero}-${ano}`;
    display_clock();
}


function display_clock() {
    let clock_refresh_time = 1000;
    clock_interval = setTimeout('display_clock_time()', clock_refresh_time)
    return clock_interval
}

display_clock()