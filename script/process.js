export{number, countDownDate}
let countDownDate = new Date ("12 27, 2022, 00: 00: 00").getTime();
let number = setInterval(function(){
    let now  = new Date().getTime();
    let distance = countDownDate - now;

    let days =Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minutes =Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60  ));
    let seconds =Math.floor((distance % (1000 * 60 )) / (1000 ));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

 },1000);