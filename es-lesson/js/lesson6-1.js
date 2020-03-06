// console.log(JSON.stringify('\u{D800}'))
// let arr = [1, [2, 3], [4, 5, [6, 7, [8, 9]]]]
// let arr = [1, 2, 3]
//
// // console.log(arr.flat(4))
// // arr.flatMap()
// console.log(arr.map(item => [item * 2]).flat())
// console.log(arr.flatMap(item => [item * 2]))
// let str = '   foo   '
// console.log(str.replace(/^\s+|\s+$/g, ''))
// console.log(str.trimLeft())// trimStart
// console.log(str.trimEnd())
// console.log(str.trim())
// let str = `"foo" and "bar" and "baz"`

// function select (regExp, str) {
//   const matches = []
//   while (true) {
//     const match = regExp.exec(str)
//     if (match === null) break
//     matches.push(match[1])
//   }
//   return matches
// }
//
// console.log(select(/"([^"]*)"/g, str))
// console.log(str.match(/"([^"]*)"/))
// function select (regExp, str) {
//   const matches = []
//   str.replace(regExp, function (all, first) {
//     matches.push(first)
//   })
//   return matches
// }
// console.log(select(/"([^"]*)"/g, str))
//
// function select (regExp, str) {
//   const matches = []
//   for (const match of str.matchAll(regExp)) {
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select(/"([^"]*)"/g, str))
// const arr = [['foo', 1], ['bar', 2]]
// const obj = Object.fromEntries(arr)
// console.log(obj.bar)
//
// const obj = {
//   abc: 1,
//   def: 2,
//   ghksks: 3
// }
//
// let res = Object.fromEntries(
//   Object.entries(obj).filter(([key, val]) => key.length === 3)
// )
//
// console.log(res)
// try {
//   // console.log();
// } catch {
//
// }
// BigInt
//
// console.log(11n);
