// 加载图片

function loadImg(src) {
    const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败${src}`)
                reject(err)
            }
            img.src = src
        }
    )
    return p
}

const src1 = "https://gd3.alicdn.com/imgextra/i3/659089913/O1CN01vRk2yy2N6CptroTne_!!659089913.jpg"
!(async function () {
    //img1
    const img1 = await loadImg(src1)
    console.log(img1.height, img1.width)
    //img2
})()