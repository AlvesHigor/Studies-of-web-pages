const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const date = "30 nov 2023"

function countDown() {
    const dateF = new Date(date)
    const today = new Date()

    let d = 'D'
    let h = 'H'
    let m = 'M'
    let s = 'S'

    const secT = (dateF - today) / 1000;

    const daysT = Math.floor(secT / 60 / 60 / 24);
    const hoursT = Math.floor(secT / 60 / 60) % 24;
    const minutesT = Math.floor(secT / 60) % 60;
    const secondsT = Math.floor(secT) % 60;

    days.innerHTML = formatTime(daysT, d)
    hours.innerHTML = formatTime(hoursT, h)
    minutes.innerHTML = formatTime(minutesT, m)
    seconds.innerHTML = formatTime(secondsT, s)
}
function formatTime(time, type) {
    if (time < 10) {
        return `0${time}${type}`;
    } else {
        return `${time}${type}`;
    }

}
countDown();
setInterval(countDown, 1000)

var vid = document.getElementById("myVideo");
function autoplay() { 
  vid.autoplay = true;
  vid.load();
}