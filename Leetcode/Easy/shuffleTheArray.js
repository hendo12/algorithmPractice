const shuffle = function(nums, n) {
    let result = [];

    for( let i = 0; i < n; i++ ) {
      result.push(nums[i]);
      result.push(nums[n + i]);
    }

    return result;
};

// Runtime: 88 ms, faster than 68.80% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.5 MB, less than 48.13% of JavaScript online submissions for Shuffle the Array.