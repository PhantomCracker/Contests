/*
Problem
Tappu Sena has got an offer to go to the moon, but wait GOGI is too young to travel in a spaceship so he requires permission from the whole Gokuldham society.
Every member of the society votes either in favor or against, ‘1’ means a vote in favor, and ‘0’ means against.

You are given a binary string that contains the votes of the whole society, if the votes in favor are strictly greater than votes in against then print gogi_to_the_moon else print kiddo.

A binary string is a string that only has two characters 0 and 1

gogi.jpg

Input Format
The first line of input contains
n
n the total number of votes

The second line of input contains a binary string of length
n
n

Output Format
Print whether GOGI will be able to go to the moon or not
Constraints
1
≤
N
≤
100
1≤N≤100
 */

/*
Problem
Tappu Sena has got an offer to go to the moon, but wait GOGI is too young to travel in a spaceship so he requires permission from the whole Gokuldham society.
Every member of the society votes either in favor or against, ‘1’ means a vote in favor, and ‘0’ means against.

You are given a binary string that contains the votes of the whole society, if the votes in favor are strictly greater than votes in against then print gogi_to_the_moon else print kiddo.

A binary string is a string that only has two characters 0 and 1

gogi.jpg

Input Format
The first line of input contains
n
n the total number of votes

The second line of input contains a binary string of length
n
n

Output Format
Print whether GOGI will be able to go to the moon or not
Constraints
1
≤
N
≤
100
1≤N≤100
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = "";

process.stdin.on('data', (chunk) => {
    arr += chunk;
});

process.stdin.on('end', () => {
    arr = arr.split('\n');
    let n = Number(arr[0]);
    let votes = arr[1];
    let zeros = 0;
    let ones = 0;

    for (let i = 0; i < n; i++) {
        if (votes[i] === '0') {
            zeros++;
        } else {
            ones++;
        }
    }

    if (ones > zeros) {
        console.log('gogi_to_the_moon');
    } else {
        console.log('kiddo');
    }
});