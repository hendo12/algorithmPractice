const interpret = function(command) {
  let result = "";

  for( let i = 0; i < command.length; i++ ) {
    switch(command[i]) {
      case "G":
        result = result + "G";
        break;
      case ")":
        result = result + "o";
        break;
      case "a":
        result = result + "al";
        i = i + 2;
        break;
      default: 
        break;
    }
  }

  return result;
};

// Runtime: 80 ms, faster than 60.26% of JavaScript online submissions for Goal Parser Interpretation.
// Memory Usage: 38.7 MB, less than 28.01% of JavaScript online submissions for Goal Parser Interpretation.