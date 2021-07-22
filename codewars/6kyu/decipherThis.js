// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

function decipherThis(str) {
    let message = '';
    const words = str.split(' ');

    words.forEach(word => {
        let newWord = '';
        console.log('word: ', word);
        let first = String.fromCharCode(parseFloat(word));
        let wordWithoutNumber = word.replace(/[0-9]/g, '');
        let last = wordWithoutNumber[wordWithoutNumber.length - 1];
        let second = wordWithoutNumber[1];

        newWord = first + second + last;
        console.log('new word: ', newWord);
        message += newWord;
    });
    console.log('message: ', message);

    return message;
}; 