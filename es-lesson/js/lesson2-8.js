// let arr = ['hello', 'world']
// let firstName = arr[0]
// let surName = arr[1]
// console.log(firstName, surName)
// let arr = ['hello', 'world']
// let [firstName, surName] = arr
// console.log(firstName, surName)
// Array|Object
// let arr = ['a', 'b', 'c', 'd']
// let [firstName,, thirdName] = arr
// console.log(firstName, thirdName)
// let arr = 'abcd'
// let [firstName,, thirdName] = new Set([1, 2, 3, 4])
// console.log(firstName, thirdName)

// let user = { name: 's', surname: 't' };
// [user.name, user.surname] = [1, 2]
// console.log(user)
// let arr = ['hello', 'world']
// for (let i = 0, item; i < arr.length; i++) {
//   item = arr[i]
// }
// let user = { name: 's', surname: 't' }
// for (let [k, v] of Object.entries(user)) {
//   // 隐式赋值，显示索引
//   // arr[1]
//   console.log(k, v)
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [firstName, curName, ...last] = arr
// console.log(firstName, curName, last)
// let arr = []
// let [firstName = 'hello', curName, ...last] = arr
// console.log(firstName, curName, last)
// let options = {
//   title: 'menu',
//   // width: 100,
//   height: 200
// }
//
// let { title: title2, width = 130, height } = options
// console.log(title2, width, height)
let options = {
  size: {
    width: {
      size: {
        width: 200
      }
    },
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}

let { size: { width: width2, height }, items: [, item2], extra } = options
console.log(width2, height, item2, extra)
