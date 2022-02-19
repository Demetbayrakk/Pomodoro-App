let minutes = 25;
let seconds = '00';

let click=new Audio('audio/click.mp3');
let bell= new Audio('audio/bell.mp3');

function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start(){
click.play();

minutes=24;
seconds=59;

document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

let minutes_interval=setInterval(minutesTimer,60000);
let seconds_interval=setInterval(secondsTimer,1000);

function minutesTimer(){
    minutes=minutes-1;
    document.getElementById('minutes').innerHTML=minutes;

}
function secondsTimer(){
    seconds=seconds-1;
    document.getElementById('seconds').innerHTML=seconds;
    if(seconds<=0){
        if(minutes<=0){
            clearInterval(minutes_interval);
            clearInterval(seconds_interval);

            document.getElementById('done').innerHTML = 'Harikasın! 25 dakikalık çalışma süresi doldu. Ara verebilirsin :)';
            document.getElementById('done').classList.add('show-message');

            bell.play();
        }
        seconds=60;
    }
}
}