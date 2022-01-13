function simplePair(arr, n){
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        var a = arr[i];
        var b = arr[j];
        if (a*b === n) {
          return [a,b];
        }
      }
    }
    return null;
  }