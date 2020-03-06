// console.log(Math.floor.apply(null, [3.72]))
// console.log(Reflect.apply(Math.floor, null, [4.72]))
// Math.ceil
// let price = 91.5
// if (price > 100) {
//   price = Math.floor.apply(null, [price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// console.log(Reflect.apply(price > 100 ?
// Math.floor : Math.ceil, null, [price]))
// let d = new Date()
// console.log(d.getTime())

// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date)

// const student = {}
// const r = Reflect.defineProperty(student, 'name',
// { value: 'Mike2' })
// console.log(student, r)
// const obj = { x: 1, y: 2 }
// Reflect.deleteProperty(obj, 'x')
// console.log(obj)
// console.log(Reflect.get(obj, 'x'))
// console.log(Reflect.get([3, 4], 1))

// console.log(Object.getOwnPropertyDescriptor(obj, 'y'))

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))
// const obj = { x: 1, y: 2 }
// console.log(Reflect.has(obj, 'y'))
// obj.z = 3
// Object.freeze(obj)
// obj.z = 3
// console.log(Reflect.isExtensible(obj))
// console.log(obj)
// console.log(Reflect.ownKeys(obj))
// console.log(Reflect.ownKeys([1, 2]))
// Symbol
// Reflect.preventExtensions(obj)
// console.log(Reflect.isExtensible(obj))
// Reflect.set(obj, 'z', 4)
// console.log(obj)
const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 2, 'goose')
// console.log(arr)
// console.log(Reflect.getPrototypeOf(arr))
Reflect.setPrototypeOf(arr, String.prototype)
// arr.sort()
console.log(Reflect.getPrototypeOf(arr))
