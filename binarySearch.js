function binarySearch(array, value) {
  var minPosition = 0;
  var maxPosition = array.length - 1;
  var middlePosition = Math.floor((minPosition + maxPosition) / 2);
  var middle = array[middlePosition];
  var counter = 0;
  var maxGuesses = Math.ceil(Math.log2(array.length));

  while ( middle !== value && counter < maxGuesses ) {
    if ( value > middle ) {
      if ( minPosition === maxPosition - 1 ) {
        middlePosition = maxPosition;
      } else {
        minPosition = middlePosition;
        middlePosition = Math.floor((minPosition + maxPosition) / 2);
      }
      middle = array[middlePosition];
      counter++;
    } else if ( value < middle ) {
      maxPosition = middlePosition;
      middlePosition = Math.floor((minPosition + maxPosition) / 2);
      middle = array[middlePosition];
      counter++;
    } 
  }

  if ( middle === value ) {
    return middlePosition;
  } else {
    return -1;
  }
} 