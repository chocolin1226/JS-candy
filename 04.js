// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  hours = `${hours}`.padStart(2, "00");

  let minutes = Math.floor(seconds / 60);
  seconds = `${seconds % 60}`.padStart(2, "00");
  minutes = `${minutes}`.padStart(2, "00");

  return `${hours}:${minutes}:${seconds}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// 1. 用floor得到整數部分
// 2. 用％得到餘數部分
// 3. 使用padStart補 0
// 4.回傳成字串組合

// // 編號：CANDY-004
// // 程式語言：JavaScript
// // 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

// function humanReadableTimer(seconds) {
//   let hours = Math.floor(seconds / 3600);
//   if (hours === 0) {
//     hours = "00";
//   } else if (hours < 10) {
//     seconds = seconds % 3600;
//     hours = `0${hours}`;
//   } else {
//     seconds = seconds % 3600;
//     hours = `${hours}`;
//   }

//   let minutes = Math.floor(seconds / 60);
//   if (minutes === 0) {
//     minutes = "00";
//   } else if (minutes < 10) {
//     seconds = seconds % 60;
//     minutes = `0${minutes}`;
//   } else {
//     seconds = seconds % 60;
//     minutes = `${minutes}`;
//   }

//   if (seconds === 0) {
//     seconds = "00";
//   } else if (seconds < 10) {
//     seconds = `0${seconds}`;
//   } else {
//     seconds = `${seconds}`;
//   }

//   return `${hours}:${minutes}:${seconds}`;
// }

// console.log(humanReadableTimer(0)); // 印出 00:00:00
// console.log(humanReadableTimer(59)); // 印出 00:00:59
// console.log(humanReadableTimer(60)); // 印出 00:01:00
// console.log(humanReadableTimer(90)); // 印出 00:01:30
// console.log(humanReadableTimer(3599)); // 印出 00:59:59
// console.log(humanReadableTimer(3600)); // 印出 01:00:00
// console.log(humanReadableTimer(45296)); // 印出 12:34:56
// console.log(humanReadableTimer(86399)); // 印出 23:59:59
// console.log(humanReadableTimer(86400)); // 印出 24:00:00
// console.log(humanReadableTimer(359999)); // 印出 99:59:59

// 1. 用floor得到整數部分
// 2. 用％得到餘數部分
// 3. 用if else 判斷要加幾個0
// 4. hours為seconds除以3600的整數部分
// 5. minutes為seconds除以60的整數部分
// 6.當hours及minutes不為0時,seconds為餘數部分
// 7.回傳成字串組合
