const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const date = "17 oct 2023"

function countDown(){
    const dateF = new Date(date)
    const today = new Date()

    const secT = (dateF - today)/1000;

    const daysT = Math.floor(secT/60/60/24);
    const hoursT = Math.floor(secT/60/60)%24;
    const minutesT = Math.floor(secT/60)%60;
    const secondsT = Math.floor(secT)%60;

    days.innerHTML = daysT
    hours.innerHTML = formatTime(hoursT)
    minutes.innerHTML = formatTime(minutesT)
    seconds.innerHTML = formatTime(secondsT)
}
function formatTime(time){
    return time <10? `0${time}`: time;    
}
countDown();
setInterval(countDown, 1000)