// for (let i = 1; i < 32; i++) {
//   if (i < 10) {
//     console.log(`0${i}`)
//   } else {
//     console.log(i)
//   }
// }

for (let i = 1; i < 30020; i += 1000) {
  console.log(i.toString().padEnd(5, '*#'))
}
