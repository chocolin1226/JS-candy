// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "f", "g"];
// const chars2 = ["O", "P", "R", "T"];

// function missingChar(chars) {
//   for (let i = 1; i < chars.length; i++) {
//     if (chars[i].charCodeAt(0) - chars[i - 1].charCodeAt(0) !== 1) {
//       return String.fromCharCode(chars[i].charCodeAt(0) - 1);
//     }
//   }
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// 1.用charCodeAt方法找出字串的字元編碼

// 2.用for迴圈，讓每個陣列元素字串的字元編碼與前一個比較

// 3.用if判斷，如果不等於1，代表中間有缺少字元

// 4.用String.fromCharCode將缺少的字元編碼轉成字母

// 5.return 回傳字母

const chars1 = ["a", "b", "c", "f", "g"];
const chars2 = ["O", "P", "R", "T"];

function missingChar(chars) {
  const allMissCharCode = [];
  for (let i = 1; i < chars.length; i++) {
    let differenceSize = chars[i].charCodeAt(0) - chars[i - 1].charCodeAt(0);
    for (let b = 1; b < differenceSize; b++) {
      let missCharCode = chars[i].charCodeAt(0) - b;
      allMissCharCode.push(missCharCode);
    }
  }
  return String.fromCharCode(...allMissCharCode);
}

console.log(missingChar(chars1)); // 印出 ed
console.log(missingChar(chars2)); // 印出 QS

// 1.先宣告新陣列allMissCharCode

// 2.用兩個for迴圈:

//     2-1外面那層計算連續兩個字元編碼差多少

//     2-2裡面那層會把所有少的字元編碼都放進陣列 allMissCharCode

// 3.將陣列內所有元素轉成字母回傳

// 提示：
// 可使用字串的 charCodeAt 方法...

// 以下未解讀

// const b = [];
// const a = chars1.forEach((element) => {
//   element.charCodeAt(0)

// });
// if (b)
// console.log(b);

// if(y.charCodeAt(0)-x.charCodeAt(0)!==1){
//     return y.charCodeAt(0)
// }
// for(let i=1;i<chars1.length;i++){
//  if  ( chars1[i].charCodeAt(0)-chars1[i-1].charCodeAt(0)!==1){
//    return String.fromCharCode(chars1[i].charCodeAt(0)-1)
//  }
// }

// chars1.reduce((x,element)=>{
//     if(element.charCodeAt(0)-x.charCodeAt(0)!==1){
//             return y.charCodeAt(0)
//         }
// })

// console.log(String.fromCharCode(97));
