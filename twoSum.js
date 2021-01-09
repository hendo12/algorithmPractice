function twoSum(arr, target) {
  var leftPosition = 0;
  var rightPosition = arr.length - 1
  var left = arr[leftPosition]; //2
  var right = arr[rightPosition]; //6

  while( left < right ) {
    if(left + right === target) {
      return [left, right];
    } else {
      if (left + right < target) {
        leftPosition++;
      } else if (left + right > target) {
        rightPosition--;
      }
    }
  }

  return [];
}

twoSum([2,4, 5, 6], 8);