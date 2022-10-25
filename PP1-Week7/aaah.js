process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', data => {
    let newData = data.split('\n');
    let jon = newData[0];
    let doctor = newData[1];
    let result = jon.length >= doctor.length ? 'go' : 'no';
    console.log(result);
});