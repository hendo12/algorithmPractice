var reverse = function (x) {
    let chars = x.toString().split('');
    let reversedNumber = '';

    console.log('chars: ', chars);

    //if negative don't swap
    if (chars[0] === '-') {
        console.log('number is negative');
        reversedNumber += '-';
        chars.shift();
        console.log('chars after shift: ', chars)
    }

    for (let i = chars.length - 1; i >= 0; i--) {
        reversedNumber += chars[i];
        console.log('iteration: ', i);
        console.log('reversed Number: ', reversedNumber);
    }

    return parseInt(reversedNumber);
};