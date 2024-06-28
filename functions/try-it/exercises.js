function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(8));

function makeSquare(size) {
    let square = ''
    for (let i = 0; i < size; i++) {
        square += (makeLine(size)) + '\n'
    }
    return square;
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width)) + '\n';

    }
    return rectangle;
}
console.log(makeRectangle(2, 7))

function makeDownwardStairs(height) {
    let stairs = ''
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i)) + '\n'
    }
    return stairs
}

console.log(makeDownwardStairs(5))

function makeSpaceLine(numSpaces, numChars) {
    let spaces = ''
    let chars = ''
    for (i = 0; i <= numSpaces; i++){
        spaces += '\+';
    }
    for (i = 0; i <= numChars; i++){
        chars += '#'
    }
    return spaces, chars
    
}
console.log(makeSpaceLine(5, 5))

