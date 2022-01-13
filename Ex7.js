function sumTwoSmallestNums(arr) {
    return arr.filter((item) => item >= 0)
      .sort((a, b) => a - b)
      .slice(0, 2)
      .reduce((acc, item) => acc + item);
  }