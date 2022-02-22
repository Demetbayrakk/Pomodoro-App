const pomodoroTimer=document.querySelector('.selectPomodoro');
const breakTimer=document.querySelector('.selectBreak');

pomodoroTimer.addEventListener('click',function(){

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

});

breakTimer.addEventListener('click',function(){
    let minutes = 10;
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
})


/*********************************To Do List ************************************************/

//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
};

function addNewItem(e) {
    if (input.value === '') {
        alert('Herhangi bir görev girmediniz');
    }
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-end';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //clear input
    input.value = '';
    e.preventDefault();
};

//delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

//delete all items
function deleteAllItems(e) {
    if (confirm('Emin misiniz?')) {
        // taskList.innerHTML='';  /// alternatif olarak bunu kullabilirsin
       taskList.childNodes.forEach(function(item){
           if(item.nodeType===1){
               item.remove();
           }
       });
    };
    e.preventDefault();
}
