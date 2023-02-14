//dz2.1
const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 450 &&positionY <=0) {
        positionX+=1
        box.style.left = `${positionX}px`
        setTimeout(move, 2)
    } else if (positionX >= 450 && positionY <= 450) {
        positionY+=1
        box.style.top = `${positionY}px`
        setTimeout(move, 2)
    } else if (positionY >= 450 && positionX >= 0) {
        positionX-=1
        box.style.left = `${positionX}px`
        setTimeout(move, 2)
    } else if (positionY >= 0 && positionX <= 0) {
        positionY-=1
        box.style.top = `${positionY}px`
        setTimeout(move, 2)
    }
}
move()
//dz 2.2
const counter = document.querySelector('.pi')
const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
let i = 0;
let timer =null;
startBtn.onclick = () => {
    timer = setInterval(()=>{
        i++
        counter.innerHTML= i
    },1000)
}
stopBtn.onclick = ()=>{
    clearInterval(timer)
}
