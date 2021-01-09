function commonInts(arr1, arr2) {
	var sharedIntegers = [];
	//compare each int in arr1 to each int in arr2
	
	for (var number of arr1) {
		for(var i = 0; i < arr2.length; i++) {
			if(number === arr2[i]) {
			 sharedIntegers.push(arr2[i]);
			}
		}
	}

	return sharedIntegers;
}

commmonInts([1,2,3], [2,3,4]);

//receive 2 arrays, return one array with common ints
//check if arrays have content inside