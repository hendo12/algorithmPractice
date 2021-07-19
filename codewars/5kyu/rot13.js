function rot13(message) {
    let output = '';
    let spacer = 13;

    for (let char of message) {
        const currentChar = char.charCodeAt();
        let nextCharCode;
        const capitalLetter = currentChar >= 65 && currentChar <= 90;
        const lowercaseLetter = currentChar >= 97 && currentChar <= 122;
        let topLimit;
        let bottomLimit;

        if (capitalLetter || lowercaseLetter) {
            if (capitalLetter) {
                topLimit = 90;
                bottomLimit = 65;
            } else {
                topLimit = 122;
                bottomLimit = 97;
            }

            if (currentChar + spacer <= topLimit) {
                nextCharCode = currentChar + spacer;
            } else {
                nextCharCode = (spacer - (topLimit - currentChar)) + bottomLimit - 1;
            }

            output += String.fromCharCode(nextCharCode);
        } else {
            //if number/special char
            output += char;
        }
    }

    return output;
}

  // https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript