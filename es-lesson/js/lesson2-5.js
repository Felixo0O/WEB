let x = 1
let y = 2
let z = 3
let obj = {
  'x': x,
  y,
  [z + y]: 6,
  * hello () {
    console.log('hello2')
  }
}
// function* functionName() {
//
// }
obj.hello()

// Set
let s = new Set()
// let s = new Set([1, 2, 3, 4])
// s.add('hello')
// s.add('goodbye')
s.add('hello').add('goodbye').add('hello')
// s.delete('hello')
// s.clear()

// console.log(s.has('hello2'), s.size)
//
// console.log(s.keys())
// console.log(s.values())
// console.log(s.entries())
// s.forEach(item => {
//   console.log(item)
// })
// for (let item of s) {
//   console.log(item)
// }
// let map = new Map([[1, 2], [3, 4]])
let map = new Map()

map.set(10, 2)
map.set(3, 'value-4')
map.set(1, 'value-3')
// map.delete(1)
// map.clear()
// console.log(map.size)
// console.log(map.has(2))
// console.log(map.get(1))
// console.log(map.keys(), map.values(), map.entries())
// map.forEach((value, key) => {
//   console.log(value, key)
// })
// for (let [key, value] of map) {
//   console.log(key, value)
// }
// let o = function () {
//   console.log('o')
// }
// map.set(o, 4)
// console.log(map.get(o))

const target = {
  a: {
    b: {
      c: {
        d: 9
      }
    },
    e: 5,
    f: 6,
    h: 10
  }
}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 2,
    f: 3
  }
}
Object.assign(target, source)

console.log(target)

// WeakSet,WeakMap
