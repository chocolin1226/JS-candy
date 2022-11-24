// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  if (typeof sequence === "string") {
    sequence = sequence.split("");
  }
  return removeRepeatValue(sequence);
}

function removeRepeatValue(sequence) {
  if (repeatIndex(sequence) === -1) {
    return sequence;
  } else {
    sequence.splice(repeatIndex(sequence), 1);
    return removeRepeatValue(sequence);
  }
}

function repeatIndex(sequence) {
  return sequence.findIndex((el, index, arr) => {
    return el === arr[index + 1];
  });
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]
