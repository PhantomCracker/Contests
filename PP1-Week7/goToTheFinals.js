process.stdin.resume();
process.stdin.setEncoding('utf8');

const goesToFinals = (averageGrade, symbol) => {
    return averageGrade >= 3.5 && (symbol === 'A' || symbol === 'B');
}

process.stdin.on('data', data => {
    let splitedData = data.split('\n');
    let n = Number(splitedData.shift());
    for (let i = 0; i < n; i++) {
        let averageGrade = Number(splitedData[i].split(' ')[0]);
        let symbol = splitedData[i].split(' ')[1];
        console.log(goesToFinals(averageGrade, symbol));
    }
});