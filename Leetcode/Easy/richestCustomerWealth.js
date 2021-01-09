const maximumWealth = function(accounts) {
  let customerWealth = {};
  
  for(let [index, customer] of accounts.entries()) {
      for(let bank of customer) {
          customerWealth[index] = customerWealth[index] + bank || bank;
      }
  }
  
  const values = Object.values(customerWealth);
  const answer = Math.max(...values)
  
  return answer;
};

// Runtime: 76 ms, faster than 80.28% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 39.7 MB, less than 5.27% of JavaScript online submissions for Richest Customer Wealth.