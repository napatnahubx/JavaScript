function sumTwoSmallestNumbers(numbers) {
    let sorting = numbers.sort((a,b) => {
      if(a > b) {
        return a;
      }
    });
  return sorting[0] + sorting[1];
  
  }
  
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
  console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));