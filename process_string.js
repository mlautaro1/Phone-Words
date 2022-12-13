const regExp = /([0234568])\1{0,2}|([79]){1,4}/g;

let matches = [];
let result = '';

const numbersToText = (string) => {
    matches = [];
    result = '';
    if (!string.length) {
        return ''
    } else {
        // Return a lowercase string.
        matches = string.match(regExp);
        console.log('Found matches: ', matches);
        // typeof matches === object
        for (key in matches) {
            console.log('Looping through key ', key, 'in ', matches)
            // loop through each key = matches[key].length
            for (i in matches[key]) {
                if (matches[key][i] === '0') {
                    console.log('Found a 0 in ', matches[key])
                    result += ' ';
                }
            }
            // matches var:  [ '00', '77', '1', '7777' ]     
            switch (matches[key][0]) {
                case '2':
                    console.log('Num key: 2');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding a to result');
                            result += 'a';
                            break;
                        case 2:
                            console.log('adding b to result');
                            result += 'b';
                            break;
                        case 3:
                            console.log('adding c to result');
                            result += 'c';
                            break;
                    }
                    break;
                case '3':
                    console.log('Num key: 3');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding d to result');
                            result += 'd';
                            break;
                        case 2:
                            console.log('adding e to result');
                            result += 'e';
                            break;
                        case 3:
                            console.log('adding f to result');
                            result += 'f';
                            break;
                    }
                    break;
                case '4':
                    console.log('Num key: 4');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding g to result');
                            result += 'g';
                            break;
                        case 2:
                            console.log('adding h to result');
                            result += 'h';
                            break;
                        case 3:
                            console.log('adding i to result');
                            result += 'i';
                            break;
                    }
                    break;
                case '5':
                    console.log('Num key: 5');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding j to result');
                            result += 'j';
                            break;
                        case 2:
                            console.log('adding k to result');
                            result += 'k';
                            break;
                        case 3:
                            console.log('adding l to result');
                            result += 'l';
                            break;
                    }
                    break;
                case '6':
                    console.log('Num key: 6');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding m to result');
                            result += 'm';
                            break;
                        case 2:
                            console.log('adding n to result');
                            result += 'n';
                            break;
                        case 3:
                            console.log('adding o to result');
                            result += 'o';
                            break;
                    }
                    break;
                case '7':
                    console.log('Num key: 7');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding p to result');
                            result += 'p';
                            break;
                        case 2:
                            console.log('adding q to result');
                            result += 'q';
                            break;
                        case 3:
                            console.log('adding r to result');
                            result += 'r';
                            break;
                        case 4:
                            console.log('adding s to result');
                            result += 's';
                            break;
                    }
                    break;
                case '8':
                    console.log('Num key: 8');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding t to result');
                            result += 't';
                            break;
                        case 2:
                            console.log('adding u to result');
                            result += 'u';
                            break;
                        case 3:
                            console.log('adding v to result');
                            result += 'v';
                            break;
                    }
                    break;
                case '9':
                    console.log('Num key: 9');
                    switch (matches[key].length) {
                        case 1:
                            console.log('adding w to result');
                            result += 'w';
                            break;
                        case 2:
                            console.log('adding x to result');
                            result += 'x';
                            break;
                        case 3:
                            console.log('adding y to result');
                            result += 'y';
                            break;
                        case 4:
                            console.log('adding z to result');
                            result += 'z';
                            break;
                    }
                    break;
                }
            }
            console.log('result is: ', result);
            return result;
        }
}
module.exports.numbersToText = numbersToText;