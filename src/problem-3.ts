// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

function countWordOccurrences(sentence: string, word: string): number {
  const wordsArr: string[] = sentence.toLowerCase().split(" ");
  const lowerWord: string = word.toLowerCase();
  const newArr: string[] = wordsArr.filter((value) =>
    value.includes(lowerWord)
  );
  return newArr.length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));