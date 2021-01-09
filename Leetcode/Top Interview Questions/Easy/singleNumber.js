const singleNumber = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  }
  
  let counts = {};

  for(let num of nums) {
    counts[num] = counts[num] + 1 || 1;
  }
    
  console.log(counts);

  let left = 0;
  let right = Object.keys(counts).length - 1;
  
  while(left < right) {
    console.log('left is less than right');
    if(Object.values(counts)[left] === 1) {
      console.log('counts left: ', Object.values(counts)[left]);
      return Object.keys(counts)[left];
    } else if(Object.values(counts)[right] === 1) {
      return Object.keys(counts)[right];
    }
    left++;
    right--;
  }
};