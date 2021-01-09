//Brute Force solution

const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let ii=0; ii < nums.length; ii++) {
      if(nums[i] + nums[ii] === target && i !== ii) {
        return [i, ii];
      } 
    }
  }
}

// Runtime: 92 ms, faster than 27.96% of JavaScript online submissions for Two Sum.
// Memory Usage: 38.7 MB, less than 62.10% of JavaScript online submissions for Two Sum.


// Solution from Leetcode

const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};

// What I was initially trying to do to avoid the brute force

const twoSum = function(nums, target) {
  let sortedArray = nums.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;

  while(left < right) {
    if(sortedArray[left] + sortedArray[right] === target) {
      return [left, right];
    } else if(sortedArray[left] + sortedArray[right] < target) {
      left++;
    } else {
      right--;
    }
  }
};