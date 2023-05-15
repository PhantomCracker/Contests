/*
Problem
Chef wants to organize a culinary competition for his students. However, he has made it mandatory that only students who have attended 75% or more of the culinary classes will be eligible to participate in the competition.
Given the total number of culinary classes conducted and the number of classes attended by a student, help Chef determine whether the student is eligible to participate in the culinary competition or not.

Input Format
The first line of the input contains an integer T - the number of test cases. The test cases then follow.
The first line of each test contains two integers x and y – the total number of classes conducted and the number of classes attended by that student.

Output Format
For each test case, output on a single line “ELIGIBLE” if the student is eligible to participate in the competition, and “NOT ELIGIBLE” otherwise.
Constraints
1<=T<=100

1<=x<=10⁴

1<=y<=10⁴

1<=y<=x
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = "";

process.stdin.on('data', (chunk) => {
    arr += chunk;
});

process.stdin.on('end', () => {
    arr = arr.split('\n');

    let T = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i].split(' ');
        let x = +numbers[0];
        let y = +numbers[1];
        let percent = 75 / 100 * x;

        let result = y <= percent ? 'NOT ELIGIBLE' : 'ELIGIBLE';
        console.log(result);
    }
});