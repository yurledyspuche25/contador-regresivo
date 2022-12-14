 let countDownDate = new Date ("sept 09, 1996, 00: 00: 00").getTime();
 let x = setInterval(function(){
    let now  = new Date().getTime();
    let distance = countDownDate - now;

    let days =Math.floor(distance/(1000))
 },1000);
