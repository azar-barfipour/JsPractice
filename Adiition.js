function ArrayAdditionI(arr) {
  // simple way
  //   const large = arr.sort((a, b) => a - b).pop();
  //   const total = arr.reduce((pre, cur) => pre + cur);
  //   console.log(large);
  //   console.log(total);
  //   if (total === large) {
  //     return true;
  //   }
  //   return false;
  arr.sort(function (a, b) {
    return a - b;
  });
  var maxNum = arr.pop();
  var tot = 0;

  for (var i = 0; i < arr.length; i++) {
    tot += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        tot += arr[j];
        if (tot == maxNum) {
          console.log(tot);
          return true;
        }
      }
    }

    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        tot -= arr[k];
        if (tot == maxNum) {
          console.log(tot);
          return true;
        }
      }
    }
    tot = 0;
  }

  return false;
}

console.log(ArrayAdditionI([5, 7, 15, -1, 2]));

// [5,7,16,1,2]
// [3, 5, -1, 8, 12]
