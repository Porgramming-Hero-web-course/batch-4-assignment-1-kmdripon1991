"use strict";
function countWordOccurrences(sentence, word) {
    const wordsArr = sentence.toLowerCase().split(" ");
    const lowerWord = word.toLowerCase();
    const newArr = wordsArr.filter((value) => value.includes(lowerWord));
    return newArr.length;
}
