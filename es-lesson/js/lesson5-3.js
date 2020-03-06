// const input = {
//   a: 1,
//   b: 2
// }
// const test = {
//   d: 5
// }
//
// const output = {
//   ...input,
//   ...test,
//   c: 3
// }
//
// console.log(input, output)
// input.a = 4
//
// console.log(input, output)

const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const { a, b, ...rest } = input

console.log(a, b, rest)
