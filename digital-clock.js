let hourTime = document.querySelector(".hour");
let minuteTime = document.querySelector(".minute");
let secondTime = document.querySelector(".second");
let amTime = document.querySelector(".am");
let dateTime = document.querySelector(".screen");
let clockInterval  ;
let da = new Date();
let hours =  da.getHours();
let minutess =  da.getMinutes();
let seconds =  da.getSeconds();
let dat = da.getDate() + "-" + da.getMonth() + "-" + da.getFullYear() ;
let am =  "am";


// secTick()

dateTime.innerText = dat
console.log(addsec);


function secTick(){
    seconds =  seconds + 1;
    secondTime.innerText = seconds;
    minuteTime.innerText = minutess;
    hourTime.innerText = hours; 
    amTime.innerText = am; 
if(seconds == 59){
    seconds = 0 ;
    minutess += 1;
    dateTime = dat;
}else if (minutess == 59){
    minutess = 0;
    hours += 1;
}else if(hours == 13){
am = "pm";
}else if (hours == 23){
    hours = 1;
    am = "am";
}

}

function startClock (){
    clockInterval = setInterval(secTick, 1000)
    
}
function delayStart(){
    setTimeout(secTick , 5000);
    setInterval(secTick , 1000);
   
   
}
function stopClock(){
    clearInterval(clockInterval);
}