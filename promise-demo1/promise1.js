const p1 = Promise.resolve(100)
// console.log('p1', p1)
p1.then(data => {
    console.log('data', data)
}).catch(err => {
    console.error('err', err)
})


const p2 = Promise.reject('err')
//console.log('p2',p2)
p2.then(data => {
    console.log('data2', data)
}).catch(err => {
    console.error('err2', err)
})


