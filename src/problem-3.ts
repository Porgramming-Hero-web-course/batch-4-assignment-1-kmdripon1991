function countWordOccurrences(sentence: string, word: string): number {
  const wordsArr: string[] = sentence.toLowerCase().split(" ");
  const lowerWord: string = word.toLowerCase();
  const newArr: string[] = wordsArr.filter((value) =>
    value.includes(lowerWord)
  );
  return newArr.length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
