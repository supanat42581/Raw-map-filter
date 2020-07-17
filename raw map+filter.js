// Map ฉบับเต็ม
// function myCustomMap(array, transformFn) {
//     let resultArray = []
//     for (let i = 0; i < array.length; i++) {
//         resultArray.push(transformFn(array[i])) 
//     }
//     return resultArray
// }
// // [1, 2, 3, 4] ==> [2, 4, 6, 8];
// const targetArray = [1, 2, 3, 4]
// // const resultArray = targetArray.map(item => item*2)
// const resultArray = myCustomMap(targetArray, item => item * 2);
// // const resultArray ==> [2, 4, 6, 8];

// console.log(myCustomMap(targetArray, item => item**3))

// filter ฉบับเต็ม
// function myCustomFilter(array, filterCondition) {
//     let resultArray = []
//     for (let i = 0; i < array.length; i++) { 
//     if(filterCondition(array[i])){
//       resultArray.push(array[i])
//     }
//     }
//     return resultArray
// }
// // [1, 2, 3, 4] ==> [2, 4, 6, 8];
// const targetArray = [1, 2, 3, 4]
// // const resultArray = targetArray.map(item => item*2)
// const resultArray = myCustomMap(targetArray, item => item * 2);
// // const resultArray ==> [2, 4, 6, 8];

// console.log(myCustomFilter(targetArray, item => item>1))