'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'sortBoxes' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY boxList as parameter.
 */

function sortBoxes(boxList) {
    console.log('box list ', boxList);
    let sortedList = [];
    let oldBoxes = [];
    let newBoxes = [];
    //iterate through list 
    boxList.map((box) => {
        console.log(box);
        //check if box is valild
        
        //create string without identifier 
        const wihtoutIdentifier = box.split(' ').slice(1).join(' ');
        //check if old or new box (check if alphanumeric after first space)
        const boxIsNew = /[0-9]/.test(wihtoutIdentifier);
        console.log('box is new? : ', boxIsNew);
        
        if(!boxIsNew) {
            oldBoxes.push(box);
        }
        
        if(boxIsNew) {
            newBoxes.push(box);
        }
    });
    
    oldBoxes = oldBoxes.sort((a, b) => {
        const aWihtoutIdentifier = a.split(' ').slice(1).join(' ');
        const bWihtoutIdentifier = b.split(' ').slice(1).join(' ');
        
        // if tie
        if(aWihtoutIdentifier === bWihtoutIdentifier) {
            //sort by Identifier
            const aIdentifier = a.split(' ').slice(0, 1);
            const bIdentifier = b.split(' '). slice(0, 1);
            
            if(aIdentifier < bIdentifier) {
                return -1;
            }
            if(aIdentifier > bIdentifier) {
                return 1;
            }
            return 0;
        }
        
        
        if(aWihtoutIdentifier < bWihtoutIdentifier) {
            return -1;
        }
        
        if(aWihtoutIdentifier > bWihtoutIdentifier) {
            return 1;
        }
    });
        
    sortedList = oldBoxes.concat(newBoxes);
    
    console.log(sortedList);
    // return list of ordered strings
    return sortedList;
}