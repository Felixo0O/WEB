// 参数默认值
// function f (x, y, z) {
//   if (y === undefined) {
//     y = 7
//   }
//   if (z === undefined) {
//     z = 42
//   }
//   return x + y + z
// }
//
// console.log(f(1, 8, 43))
// function f (x, y = 7, z = x + y) {
//   console.log(f.length)
//   return x * 10 + z
// }
// console.log(f(1, 2, 3, 4))
// function sum () {
//   let num = 0
//   Array.prototype.forEach.call(arguments, function (item) {
//     num += item * 1
//   })
//   // Array.from(arguments).forEach(function (item) {
//   //   num += item * 1
//   // })
//   return num
// }
// function sum (base, ...nums) {
//   // Rest parameter
//   let num = 0
//   nums.forEach(function (item) {
//     num += item * 1
//   })
//   return base * 2 + num
// }
// console.log(sum(1, 2, 3))

// function sum (x = 1, y = 2, z = 3) {
//   return x + y + z
// }
// let data = [4, 5, 9]
// // console.log(sum(data[0], data[1], data[2]))
// // console.log(sum.apply(this, data))
// // spread
// console.log(sum(...data))

// function hello () {}
// let hello = function () {}
// let sum = (x, y, z) => {
//   return {
//     x: x,
//     y: y,
//     z: z
//   }
// }
// console.log(sum(1, 2, 4))

let test = {
  name: 'test',
  say: () => {
    console.log(this.name, this)
  }
}
test.say()
