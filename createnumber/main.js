const screen = document.querySelector(".screen");
const creatNumber = document.querySelector(".creatNumber");
const callNumber = document.querySelector(".callNumber");
const divNowNumber = document.querySelector(".nowNumber");
const divQueue = document.querySelector(".queue");


let queue = [];
var n = 0
creatNumber.onclick = () => {
    n += 1
    console.log(1, n)
    queue.push(n)
    divNowNumber.innerHTML = n
    divQueue.innerHTML = JSON.stringify(queue)
    // console.log(queue)
}
callNumber.onclick = () => {
    // n += 1
    //作用域是看在哪里定义
    console.log(2, n)
    if (queue.length === 1) { return }
    const m = queue.shift()
    screen.innerHTML = `请${m}号就餐`
    divQueue.innerHTML = JSON.stringify(queue)
    // console.log(number)
}