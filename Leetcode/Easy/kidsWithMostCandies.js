const kidsWithCandies = function(candies, extraCandies) {
  const highestCandyCount = Math.max(...candies);
  let result = [];
    
  for(let [index, kid] of candies.entries() ) {
    let canHaveMost = kid + extraCandies >= highestCandyCount;

    canHaveMost ? result.push(true) : result.push(false);
  }
    
  return result;
};

// Runtime: 88 ms, faster than 15.01% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 40.5 MB, less than 5.54% of JavaScript online submissions for Kids With the Greatest Number of Candies.