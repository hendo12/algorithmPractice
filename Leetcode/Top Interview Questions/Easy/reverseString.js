const reverseString = function(s) {
  let left = 0, right = s.length - 1;

  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};

// Runtime: 168 ms, faster than 6.63% of JavaScript online submissions for Reverse String.
// Memory Usage: 46 MB, less than 32.70% of JavaScript online submissions for Reverse String.

const reverseString = function(s) {
  return s.reverse();
};

// Runtime: 108 ms, faster than 80.37% of JavaScript online submissions for Reverse String.
// Memory Usage: 45.7 MB, less than 66.96% of JavaScript online submissions for Reverse String.