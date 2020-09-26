let divs = document.getElementsByTagName("div")
let n = 1
for (let i = divs.length - 1; i >= 0; i--) {
    divs[i].addEventListener('click', (e) => {
        const t = e.currentTarget
        //返回触发事件的事件节点，事件对象会在点击之后消亡
        setTimeout(() => { t.classList.remove("x") }, 500 * (n++))
    })
}