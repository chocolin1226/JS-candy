// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// 用filter將元素分成0和不是0,再用concat把陣列合起來回傳

// // 編號：CANDY-003
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i, 1);
//       arr.push(0);
//     }
//   }
//   return arr;
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// 用for迴圈，當元素等於0,用splice剪掉,在後面加0

// // 編號：CANDY-003
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

// let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

// function moveZerosToEnd(arr) {
//   let arrNew = [];
//   let zeroNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arrNew.push(arr[i]);
//     } else {
//       zeroNumber++;
//     }
//   }
//   for (let j = 0; j < zeroNumber; j++) {
//     arrNew.push(0);
//   }

//   return (arr = arrNew);
// }

// let result = moveZerosToEnd(list);
// console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// 1.用for迴圈，當陣列元素不等於0，放入新的陣列
// 2.當等於0，將計算0的個數zeroNumber多一
// 3.用for迴圈把總共有幾個0,再放入新陣列
// 4.把陣列＝新陣列並傳回
