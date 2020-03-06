// export const name = 'hello'
// export let addr = 'Beijing'
// export var list = [1, 2, 3]

// const name = 'hello3'
// let addr = 'Beijing'
// let list = [1, 2, 4]
//
// export default name
// export {
//   addr,
//   list
// }

// const say = (content) => {
//   console.log(content)
// }
// const run = () => {
//   console.log('i am running')
// }
// export default say
// export {
//   run
// }

export function say () {
  console.log('say')
}
export function run () {
  say()
}

// const data = {
//   code: 1,
//   message: 'success'
// }
// const des = {
//   age: 20,
//   addr: 'Beijing'
// }
// export default {
//   data,
//   des
// }

export class Test {
  constructor () {
    this.id = 6
  }
}

export class Animal {
  constructor () {
    this.name = 'dog'
  }
}

export default class People {
  constructor () {
    this.id = '132'
  }
}
