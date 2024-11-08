function removeDuplicates(numbers: number[]): number[] {
  const arrayWithoutDuplicates: number[] = numbers.filter(
    (num, idx) => numbers.indexOf(num) === idx
  );
  return arrayWithoutDuplicates;
}

