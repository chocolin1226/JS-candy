// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function wordsCodeCal(el) {
  return el.split("").reduce((sum, i) => {
    return sum + i.codePointAt() - 96;
  }, 0);
}

function highestScoreWord(input) {
  const words = input.split(" ");
  return words.reduce((max, el) =>
    wordsCodeCal(max) > wordsCodeCal(el) ? max : el
  );
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// 1.寫一個函數將元素拆成字母，再用reduce將字母得分加總回傳
// (龍哥說這個函數無關題目的函數，可以寫在題目函數外）
// 2.用split將字串拆成單字陣列
// 3.將單字陣列元素用reduce比較分數最大的單字回傳

// // 編號：CANDY-008
// // 程式語言：JavaScript
// // 題目：傳入一字串，計算得分最高的字
// //      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
// //      所有傳入的字都是小寫。

// function highestScoreWord(input) {
//     const words = input.split(" ");
//     const wordsCodeCal = words.map((el) => {
//       return Array.from(el).reduce((acc, i) => {
//         return acc + i.codePointAt() - 96;
//       }, 0);
//     });
//     return words[wordsCodeCal.indexOf(Math.max(...wordsCodeCal))];
//   }

//   console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
//   console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
//   console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// 1.用split將字串依空格分裂成words陣列
// 2.用Array.from將元素轉成陣列
// 3.用codePointAt()將每個元素字母轉成Unicode值
// 4.因為我們a是要等於1，97要減96，以此類推
// 5.用reduce將陣列中每個字母換算的數字相加總回傳
// 6.用map將回傳的數字組合成新的陣列wordsCodeCal
// 7.用Math.max找到最大數
// 8.用indexOf找到最大數的索引值
// 9.依索引值回傳words陣列元素
