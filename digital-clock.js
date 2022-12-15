let hourTime = document.querySelector(".hour");
let minuteTime = document.querySelector(".minute");
let secondTime = document.querySelector(".second");
let amTime = document.querySelector(".am");
let da = new Date();
let hours =  da.getHours();
let minutess =  da.getMinutes();
let seconds =  da.getSeconds();
let am =  "am";

function secTick(){
    seconds =  seconds + 1;
    secondTime.innerText = seconds;
    minuteTime.innerText = minutess;
    hourTime.innerText = hours; 
    amTime.innerText = am; 
if(seconds == 59){
    seconds = 0 ;
    minutess += 1;
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
// secTick()
setInterval(secTick , 1000);

console.log(addsec);
