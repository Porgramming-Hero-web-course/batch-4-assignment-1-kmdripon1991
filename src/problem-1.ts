function sumArray(numbers: number[]):number {
  const sumOfArr:number = numbers.reduce((acc, num) => acc + num, 0);
  return sumOfArr
}

