// function loop () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
//
// loop()
// function * loop () {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }
//
// const l = loop()
//
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()
// l.next()

// function * gen () {
//   let val
//   val = yield 1
//   console.log(val)
// }
//
// const l = gen()
// l.next()
// l.next()
function * gen () {
  let val
  val = yield * [1, 2, 3]
  console.log(val)
}

const l = gen()
// {
//   next(){
//     value:1,
//     done:false
//   }
// }
// console.log(l)
console.log(l.next())
console.log(l.next())
// function * gen () {
//   let val
//   val = (yield [1, 2, 3]) + 7
//   console.log(val)
// }
//
// const l = gen()
// console.log(l.next(10))
// console.log(l.return(100))
// console.log(l.next(20))

// function * gen () {
//   while (true) {
//     try {
//       yield 1
//     } catch (e) {
//       console.log(e.message)
//     }
//   }
// }
//
// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('ss'))
// console.log(g.next())

// function draw (first = 1, second = 3, third = 5) {
//   let firstPrize = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3K', '3O', '3P']
//   let result = []
//   let random
//   // 抽一等奖
//   for (let i = 0; i < first; i++) {
//     random = Math.floor(Math.random() * firstPrize.length)
//     result = result.concat(firstPrize.splice(random, 1))
//   }
//   // 抽二等奖
//   for (let i = 0; i < second; i++) {
//     random = Math.floor(Math.random() * secondPrize.length)
//     result = result.concat(secondPrize.splice(random, 1))
//   }
//   // 抽三等奖
//   for (let i = 0; i < third; i++) {
//     random = Math.floor(Math.random() * thirdPrize.length)
//     result = result.concat(thirdPrize.splice(random, 1))
//   }
//   return result
// }
//
// let t = draw()
// for (let value of t) {
//   console.log(value)
// }
// function * draw (first = 1, second = 3, third = 5) {
//   let firstPrize = ['1A', '1B', '1C', '1D', '1E']
//   let secondPrize = ['2A', '2B', '2C', '2D', '2E', '2F', '2G', '2H', '2I']
//   let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3K', '3O', '3P']
//   let count = 0
//   let random
//
//   while (1) {
//     if (count < first) {
//       random = Math.floor(Math.random() * firstPrize.length)
//       yield firstPrize[random]
//       count++
//       firstPrize.splice(random, 1)
//     } else if (count < first + second) {
//       random = Math.floor(Math.random() * secondPrize.length)
//       yield secondPrize[random]
//       count++
//       secondPrize.splice(random, 1)
//     } else if (count < first + second + third) {
//       random = Math.floor(Math.random() * thirdPrize.length)
//       yield thirdPrize[random]
//       count++
//       thirdPrize.splice(random, 1)
//     } else {
//       return false
//     }
//   }
// }
//
// let d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)

// function * count (x = 1) {
//   while (1) {
//     if (x % 3 === 0) {
//       yield x
//     }
//     x++
//   }
// }
//
// let num = count()
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
// console.log(num.next().value)
