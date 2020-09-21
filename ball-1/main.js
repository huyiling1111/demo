
let html = document.querySelector('.html')
let style = document.querySelector('style')
let string = `/*你好，我叫zero
接下来展示我的前端功底
首先我准备一个div*/
.div1{
border:1px solid red;
width:300px;
height:300px;
}
/*接下来我把div变成一个八卦图
注意看哈~
首先，把div变成一个圆
*/
.div1{
border-radius:50%;
box-shadow: 0 0 3px rgba(0,0,0,0.5);
border: none;

}
/*八卦是阴阳形成的
一黑一白
*/
.div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*然后加两个小球
*/
.div1::before {
position: absolute;
width: 150px;
height: 150px;
left: 25%;
top: 0px;
border-radius:50%;
background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
.div1::after {
position: absolute;
width: 150px;
height: 150px;
left: 25%;
bottom: 0px;
border-radius:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`


// string = string.replace(/\n/g, '<br>')
//把string所有的回车换成换行
let string2 = '';
//缓存显示到屏幕上的结果
let n = 0;
let step = () => {
    console.log(string.length)
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
            // 如果是回车就不照搬
        } else if (string[n] === " ") {
            string2 += "&nbsp;";

        } else {
            string2 += string[n]
            // 如果是回车就照搬
        }
        if (n >= string.length) {
            return
        }
        else {
            n = n + 1
            html.innerHTML = string2
            style.innerHTML = string.substring(0, n)
            window.scrollTo(0, 9999)
            html.scrollTo(0, 9999)

            // //
            // console.log(style.innerHTML, html.innerHTML)
            step()
        }
    }, 10)
}
step();

