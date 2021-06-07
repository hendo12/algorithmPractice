// Given two strings, write a function to determine if the second string is an anagram of the first
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length ) {
        return false;
    }

    let strLetters = {};

    for(let char of str1) {
        strLetters[char] === undefined ? strLetters[char] = 1 : strLetters[char]++;
    }
    
    // console.log('str letters: ', strLetters);

    for(let char of str2) {
        // console.log('str 2 char in strLetters: ', strLetters[char]);
       if(!strLetters[char]) {
           return false;
       } else {
           strLetters[char]--;
       }
    }

    return true;
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true