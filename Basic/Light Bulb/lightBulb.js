var lamp = window.document.getElementById('lightBulb')

function broked(){
    return lamp.src.indexOf('broked') > -1 
}

function on(){
    if (!broked()){
        lamp.src = './assets/img/on.png'
    }
}

function off(){
    if(!broked()){
        lamp.src = './assets/img/off.png'
    }
}

lamp.addEventListener('click', broke)

function broke(){
    lamp.src = './assets/img/broked.png'
}