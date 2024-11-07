function removeDuplicates(numbers: number[]): number[] {
  const arrayWithoutDuplicates: number[] = numbers.filter(
    (num, idx) => numbers.indexOf(num) === idx
  );
  return arrayWithoutDuplicates;
}

// console.log(removeDuplicates([1, 2, 2, 5, 8, 100, 11, 5, 6, 8]))
