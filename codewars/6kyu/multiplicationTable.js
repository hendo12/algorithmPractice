function multiplicationTable(row, col) {
    let output = [];

    for (let i = 1; i <= row; i++) {
        output.push([]);

        for (let ii = 1; ii <= col; ii++) {
            output[i - 1].push(ii * (i));
        }
    }

    return output;
}

  // https://www.codewars.com/kata/5432fd1c913a65b28f000342/train/javascript