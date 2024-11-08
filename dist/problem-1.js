"use strict";
function sumArray(numbers) {
    const sumOfArr = numbers.reduce((acc, num) => acc + num, 0);
    return sumOfArr;
}
