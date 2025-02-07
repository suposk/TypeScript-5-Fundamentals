// function GetReview(title: string): string | number {
//     if (title === 'A New Hope') {
//         return 'Classic';
//     }
//     else if (title.length <= 5) {
//         return 'Ehhh ' + title;
//     }
//     return Math.floor(Math.random() * 10);
// }

// let movieTitle: string = 'A New Hope';
// movieTitle = 'The Force Awakens';
// //movieTitle = 'The ';

// let movieRating: string | number = GetReview(movieTitle);

// console.log(`Movie Title: ${movieTitle}`);

// if (typeof movieRating === 'string') {
//     console.log(`Review: ${movieRating}`);
// }
// else {
//     console.log(`Rating: ${movieRating}/10`);
// }

let adder = (a: number, b: number): number => a + b;
var sum = adder(5, 10);
console.log(sum);

let scores: number[] = [10, 20, 30, 40, 50];
let highScores: number[];
highScores = scores.filter((element, index, array) => {
    console.log(`element: ${element}`, `index: ${index}`);
    if (element > 30) {
        return true;
    }
    return false;
});

function LogMessage(message: string): void {
    console.log(message);
}

LogMessage("Hello World");

console.log("end");