let grade = {
  'lilei': 96,
  'hanmeimei': 99
}

// let result = []
// for (let k in grade) {
//   if (k === 'lilei') {
//     result.push(k)
//   }
// }
//
// console.log(result)
//
// console.log(Object.keys(grade).filter(item => item === 'lilei'))
// console.log(Object.values(grade).filter(item => item > 96))
// let result = []
for (let [k, v] of Object.entries(grade)) {
  console.log(k, v)
}

// console.log(result)
