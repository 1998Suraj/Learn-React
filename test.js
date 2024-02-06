const array = [1, 5, 2, 3, 2, 7, 8, 1, 3];

let arr2 = [array[0]];

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] !== array[i]) {
      arr2.push(arr2[j]);
    }
  }
}

console.log(arr2);
