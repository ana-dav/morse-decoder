const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = []
    let chars = splitArrayIntoChunksOfTen(expr.split(''))
    .map(innerArr => innerArr
        .join('')
        .replace(/11/g, '-')
        .replace(/10/g, '.')
        .replace(/\*{10}/, " ")
        .replace(/0/g, '')
    );

    for(let i = 0; i < chars.length; i++) {
        if(chars[i] === ' ') decoded.push(' ')
        for(let property in MORSE_TABLE) {
            if(property === chars[i]) decoded.push(MORSE_TABLE[property])
        }
    }

    return decoded.join('')
}

function splitArrayIntoChunksOfTen(arr) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += 10));
    }
    return chunks;
}

module.exports = {
    decode
}