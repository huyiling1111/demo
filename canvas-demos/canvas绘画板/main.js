let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

//   将canvas的宽度、高度设置为整个网页的可视宽度、高度。
function is_touch_device() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}
console.log(is_touch_device());
//是否支持触摸设备
let ctx = canvas.getContext("2d");
//   设置画笔，用来添加绘画功能
// ctx.strokeStyle = "red";
// ctx.lineWidth = 10;
ctx.lineCap = "round";
let painting = false;
let last = [];
let canvasHistory = [];
//   ctx.strokeStyle = "none";
//   设置画笔填充颜色
let step = -1
console.log(step)
one.onclick = function () {
    ctx.lineWidth = 3;
    for (var i = 0; i < one.parentNode.children.length; i++) {
        one.parentNode.children[i].classList.remove('active')
    }
    one.classList.add('active')
}

two.onclick = function () {
    ctx.lineWidth = 6;
    for (var i = 0; i < two.parentNode.children.length; i++) {
        two.parentNode.children[i].classList.remove('active')
    }
    two.classList.add('active')
}

three.onclick = function () {
    ctx.lineWidth = 9;
    for (var i = 0; i < three.parentNode.children.length; i++) {
        three.parentNode.children[i].classList.remove('active')
    }
    three.classList.add('active')
}

four.onclick = function () {
    ctx.lineWidth = 12;
    for (var i = 0; i < four.parentNode.children.length; i++) {
        four.parentNode.children[i].classList.remove('active')
    }
    four.classList.add('active')
}

five.onclick = function () {
    ctx.lineWidth = 15;
    for (var i = 0; i < five.parentNode.children.length; i++) {
        five.parentNode.children[i].classList.remove('active')
    }
    five.classList.add('active')
}

six.onclick = function () {
    ctx.lineWidth = 18;
    for (var i = 0; i < six.parentNode.children.length; i++) {
        six.parentNode.children[i].classList.remove('active')
    }
    six.classList.add('active')
}

seven.onclick = function () {
    ctx.lineWidth = 21;
    for (var i = 0; i < seven.parentNode.children.length; i++) {
        seven.parentNode.children[i].classList.remove('active')
    }
    seven.classList.add('active')
}

clear.onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // console.log("清空")
}

save.onclick = function () {
    var url = canvas.toDataURL('image/png')
    var a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = '我的画板'
    a.target = '_blank'
    a.click()
}

cancel.onclick = function () {

    if (step > -1) {

        step--;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.putImageData(canvasHistory[step], 0, 0)
        console.log(step, "清空")
        console.log(ctx.putImageData(canvasHistory[step], 0, 0))

    } else {
        console.log('不能再继续撤销了');
    }
}
black.onclick = function () {
    ctx.strokeStyle = 'black'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    black.classList.add('active')
}

red.onclick = function () {
    ctx.strokeStyle = 'red'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    red.classList.add('active')
}

green.onclick = function () {
    ctx.strokeStyle = 'green'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    green.classList.add('active')
}

blue.onclick = function () {
    ctx.strokeStyle = 'blue'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    blue.classList.add('active')
}

yellow.onclick = function () {
    ctx.strokeStyle = 'yellow'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    yellow.classList.add('active')
}
skyblue.onclick = function () {
    ctx.strokeStyle = 'skyblue'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    skyblue.classList.add('active')
}
pink.onclick = function () {
    ctx.strokeStyle = 'pink'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    pink.classList.add('active')
}
white.onclick = function () {
    ctx.strokeStyle = 'white'
    for (var i = 0; i < black.parentNode.children.length; i++) {
        black.parentNode.children[i].classList.remove('active')
    }
    white.classList.add('active')
}


function drawLine(x, y, x1, y1) {
    ctx.beginPath();
    //开始一个新的绘制路径
    ctx.moveTo(x, y);
    //定义直线的起点坐标为(10,10)
    ctx.lineTo(x1, y1);
    //定义直线的终点坐标为(50,10)
    ctx.stroke();
}

if (is_touch_device() === true) {
    canvas.ontouchstart = (e) => {
        // console.log(e);
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        last = [x, y];
    };
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        drawLine(last[0], last[1], x, y);
        //连线
        last = [x, y];
    };
    canvas.ontouchend = function () {
        using = false
        step++;
        canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height))
    }


} else {
    canvas.onmousedown = (e) => {

        let x = e.clientX;
        let y = e.clientY;
        last = [x, y];
        //   声明第一个位置
        painting = true;
    };
    canvas.onmousemove = (e) => {
        if (painting === true) {

            // console.log(e);
            let x = e.clientX;
            let y = e.clientY;
            drawLine(last[0], last[1], x, y);
            //连线
            last = [x, y];
            // 将当前的位置再赋值给last
            // console.log(e.clientY);

            //沿着坐标点顺序的路径绘制直线

            //关闭当前的绘制路径
        }
    };
    canvas.onmouseup = function (aaa) {
        painting = false;
        step++;
        console.log("step" + step)
        canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height))
    }

}


