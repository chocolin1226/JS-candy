// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  return Number(
    numbers.filter((el, index, arr) => {
      return arr.indexOf(el) === arr.lastIndexOf(el);
    })
  );
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// 1.用indexOf找出元素第一個索引值
// 2.用lastIndexOf找出元素最後一個索引值
// 3.用filter找出陣列中符合「第一個索引值等於最後一個索引值」的元素
// 4.轉成數字回傳

//以下未解讀

// // 編號：CANDY-006
// // 程式語言：JavaScript
// // 題目：找出在數字陣列裡跟其它元素不一樣的值

// function findDifferent(numbers) {
//     numbers.sort((a, b) => {
//       return a - b;
//     });
//     if (numbers[0] - numbers[1] !== 0) {
//       return numbers[0];
//     } else {
//       return numbers[numbers.length - 1];
//     }
//   }

//   console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
//   console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
//   console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// // 編號：CANDY-006
// // 程式語言：JavaScript
// // 題目：找出在數字陣列裡跟其它元素不一樣的值

// function findDifferent(numbers) {
//   let differentNumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     differentNumber = numbers.filter((el) => el !== numbers[i]);
//     if (differentNumber.length === 1) {
//       return Number(differentNumber);
//     }
//   }
// }

// console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
// console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
// console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// 1.用for迴圈對陣列numbers內每個元素做判斷
// 2.用filter找出陣列中跟自己不一樣的數字回傳到陣列differentNumber
// 3.用if判斷，differentNumber長度為1時，回傳成數字
