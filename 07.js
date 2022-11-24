// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  const oddNumbers = numbers.filter((el) => el % 2 !== 0);
  const evenNumbers = numbers.filter((el) => el % 2 === 0);
  return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0];
}
console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 1.將陣列元素分成奇數及偶數陣列
// 2.如果奇數陣列長度為1回傳奇數陣列元素，否則回傳偶數陣列元素

// // 編號：CANDY-007
// // 程式語言：JavaScript
// // 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

// function findSomeDifferent(numbers) {
//   const newNumbers = numbers.map((el) => (el % 2) ** 2);
//   const indexNumber = newNumbers.findIndex((el, index, arr) => {
//     return arr.indexOf(el) === arr.lastIndexOf(el);
//   });
//   return numbers[indexNumber];
// }
// console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
// console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 1.用map將陣列元素取2餘數的平方,新的陣列只會有0或1
// 2.用findIndex找到新的陣列中跟其它元素不一樣的值的索引值
// 3.依索引值回傳原陣列元素
