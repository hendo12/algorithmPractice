var reverseString = function(s) {
    let result = [];

    for(let i = s.length - 1; i>=0; i--) {
        result.push(s[i]);
        console.log(result);
    }

    console.log(result);

    return result;
};

const s = ["h","e","l","l","o"];

reverseString(s);