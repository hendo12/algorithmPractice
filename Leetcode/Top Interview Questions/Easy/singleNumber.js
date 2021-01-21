const singleNumber = function(nums) {
  if(nums.length === 1) {
    return nums[0];
  }
  
  let counts = {};

  for(let num of nums) {
    // counts[num] = counts[num] + 1 || 1;
    const firstTimeUsed = !counts[num];

    if(firstTimeUsed) {
      counts[num] = 1;
    } else {
      delete counts[num];
    }
  }

  return Object.keys(counts)[0];
}

// Runtime: 96 ms, faster than 55.37% of JavaScript online submissions for Single Number.
// Memory Usage: 44.9 MB, less than 15.33% of JavaScript online submissions for Single Number.