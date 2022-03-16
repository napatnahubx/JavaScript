function maxDigit(n){
    if(n == 0){ return 0;}
    else{
      var remainder = n % 10
      return Math.max(remainder, maxDigit((n-remainder)*1e-1));
    }
  }
  console.log(maxDigit(379));
  console.log(maxDigit(2));
  console.log(maxDigit(377401));