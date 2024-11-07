function sumArray(numbers: number[]):number {
  const sumOfArr:number = numbers.reduce((acc, num) => acc + num, 0);
  return sumOfArr
}

// console.log(sumArray([1,2,3,4,5]))
