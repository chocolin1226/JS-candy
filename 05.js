// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  const arr = Array.from(String(num));
  return arr.reduce((sum, x) => {
    return sum + Number(x) ** 2;
  }, "");
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// 1.用String將數字轉字串
// 2.用Array.from將字串轉陣列
// 3.用reduce將元素平方後合起來
// 4.回傳印出
