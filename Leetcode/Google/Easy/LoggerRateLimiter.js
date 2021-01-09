/**
 * Initialize your data structure here.
 */
const Logger = function() {
  let nextValidTimes = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  const messageExists = Logger.nextValidTimes[message];
  const tooSoonToPrint = messageExists + 10 >= timestamp;

  // first, check current existing structure for message and timestamp
  // if message already exists and timestamp diff is LESS THAN 10, return False
  if(messageExists && tooSoonToPrint) {
    return false
  } else if(!messageExists) {
    // each new message: create a key based off of timestamp and value will be an array with the current message
    // calculate next valid time for same message to be repeated (ie 10 seconds later from timestamp) and add message with time value

    const nextValidTime = timestamp + 10;
    Logger.nextValidTimes[message] = nextValidTime;
    return true;
  } else if(messageExists && !tooSoonToPrint){
    //message does exist but not too soon to print
      const nextValidTime = timestamp + 10;
      Logger.nextValidTimes[message] = nextValidTime;
      return true;
  }

  // if nothing is passed in 
  return null;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */