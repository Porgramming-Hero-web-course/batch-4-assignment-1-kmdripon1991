"use strict";
function removeDuplicates(numbers) {
    const arrayWithoutDuplicates = numbers.filter((num, idx) => numbers.indexOf(num) === idx);
    return arrayWithoutDuplicates;
}
