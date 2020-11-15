async function fn1() {
    return 100
}
// const res1 = fn1()
// console.log('res1', res1)//Promise 对象
// res1.then()

// !(async function () {
//     const data2 = await fn1()
//     console.log('data2', data2)  //100
// })()


!(async function () {
    const p4 = Promise.reject('err')
    try {
        const res = await p4
        console.log(res)
    } catch (err) {
        console.error(err)
    }
})()