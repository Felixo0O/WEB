// let o = {
//   name: 'xiaoming',
//   price: 190
// }
//
// let d = new Proxy(o, {
//   get (target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })
//
// console.log(d.price, d.name)
// let o = {
//   name: 'xiaoming',
//   price: 190
// }

// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key]
//   },
//   set (target, key, value) {
//     return false
//   }
// })
// d.price = 300
// console.log(d.price, d.name)

// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   })
// }
// o.pirce = 300
// console.log(o.name, o.price)
// 监听错误
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // report('./')
// }, true)
//
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// // 校验规则
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         // 不满足规则就要触发错误
//         throw new TypeError('price exceed 300')
//         // return false
//       } else {
//         target[key] = value
//       }
//     } else {
//       target[key] = value
//     }
//   } else {
//     return false
//   }
// }
// let d = new Proxy(o, {
//   get (target, key) {
//     return target[key] || ''
//   },
//   set: validator
// })
// d.price = 301
// d.name = 'hanmeimei'
// d.age = 400
// console.log(d.price, d.name, d.age)
// class Component {
//   constructor () {
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id () {
//     return this.proxy.id
//   }
// }
//
// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)

let o = {
  name: 'xiaoming',
  price: 190
}

let d = Proxy.revocable(o, {
  get (target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})

console.log(d.proxy.price, d)
setTimeout(function () {
  d.revoke()
  setTimeout(function () {
    console.log(d.proxy.price)
  }, 100)
}, 1000)
