const numArr = [1, 4, 6, 3, 9, 5, 12];
const newArr = [];

for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0) {
        console.log(numArr[i]);
    }
}