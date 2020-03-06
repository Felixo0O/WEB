let authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'LP'],
    scienceFiction: ['Neal', 'Arthru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'Terry P.K']
  },
  Addres: []
}

// let r = []
// for (let [, v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
// }
// console.log(r)

// authors[Symbol.iterator] = function () {
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   return {
//     next () {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

authors[Symbol.iterator] = function * () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  while (1) {
    if (!values.length) {
      if (keys.length) {
        values = allAuthors[keys[0]]
        keys.shift()
        yield values.shift()
      } else {
        return false
      }
    } else {
      yield values.shift()
    }
  }
}

let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)
