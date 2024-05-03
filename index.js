//EXAM(2)

//TASK#1

// function sumNums(arr) {
//   let arr2 = 0;
//   let arr3 = arr.map((e) => {
//     if (typeof e === "number") {
//       arr2 += e;
//     }
//   });
//   return arr2;
// }
// console.log(sumNums([false, 1, "2", true, 12]));

//TASK#2

// let isUpperCase = function (str, number) {
//   return str[number] == str[number].toUpperCase() ? true : false;
// };
// console.log(isUpperCase("Javascript hello", 0));

//TASK#3

// let getEvenNum = (num) => {
//   return num.filter((e) => {
//     return e % 2 === 0;
//   });
// };
// console.log(getEvenNum([1, 2, 3, 4, 0, 5]));

//TASK#4

// function findDumplicateNum(arr) {
//   return arr.filter((e, i) => arr.indexOf(e) !== i);
// }
// console.log(findDumplicateNum([4, 1, 1]));

// let firstLargestNum = function (arr1, arr2, arr3) {
//   let arr1_ = arr1.reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   let arr2_ = arr2.reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   let arr3_ = arr3.reduce((a, b) => {
//     return Math.max(a, b);
//   });
//   let conect = [arr1_, arr2_, arr3_];
//   return conect;
// };
// console.log(firstLargestNum([34, 23, 2], [29, 4, 100], [2, 1, 10]));
