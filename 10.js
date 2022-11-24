// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function numCalc(arrNum, el) {
  let digits = arrNum.length - arrNum.indexOf(el);
  if (digits === 1) {
    return `${el}`;
  } else {
    return `${10 ** (digits - 1)} x ${el}`;
  }
}

function expandedForm(num) {
  const arrNum = String(num).split("");
  let newNum = [];
  arrNum.forEach((el) => {
    if (el !== "0") {
      newNum.push(numCalc(arrNum, el));
    }
  });
  return newNum.join(" + ");
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// 1.做一個numCalc函式能將值回傳成"位數x值"
// 2.用String和split將數字的每個位數拆成arrNum陣列
// 3.如果陣列元素不為零,將元素執行numCalc函式後加入新的陣列newNum
// 4.用join展開newNum陣列

// // 編號：CANDY-010
// // 程式語言：JavaScript
// // 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// // 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

// function expandedForm(num) {
//   return String(num)
//     .split("")
//     .reduce((acc, el) => {
//       for (let i = String(num).split("").length; i > 0; i--) {
//         el = Math.floor(num / 10 ** (i - 1));
//         num = num % 10 ** (i - 1);
//         if (acc === "") {
//           if (el !== 0) {
//             if (i === 1) {
//               return `${el}`;
//             } else {
//               return `${10 ** (i - 1)} x ${el}`;
//             }
//           } else {
//             return ``;
//           }
//         } else {
//           if (el !== 0) {
//             if (i === 1) {
//               return `${acc} + ${el}`;
//             } else {
//               return `${acc} + ${10 ** (i - 1)} x ${el}`;
//             }
//           } else {
//             return `${acc}`;
//           }
//         }
//       }
//     }, "");
// }

// console.log(expandedForm(8)); // 印出 8
// console.log(expandedForm(25)); // 印出 10 x 2 + 5
// console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
// console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
// console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// 1.用String(num).split("")將數字的每個位數拆成陣列
// 2.用reduce將結果回傳
// 3.用for迴圈把數字做位數相乘
// 4.用if判斷acc是否為空字串、元素是否不為0、位數是否為個位數
