"use strict";
function GetReview(title) {
    if (title === 'A New Hope') {
        return 'Classic';
    }
    else if (title.length <= 5) {
        return 'Ehhh ' + title;
    }
    return Math.floor(Math.random() * 10);
}
let movieTitle = 'A New Hope';
movieTitle = 'The Force Awakens';
//movieTitle = 'The ';
let movieRating = GetReview(movieTitle);
console.log(`Movie Title: ${movieTitle}`);
if (typeof movieRating === 'string') {
    console.log(`Review: ${movieRating}`);
}
else {
    console.log(`Rating: ${movieRating}/10`);
}
var cusStr = CreateCustomer('John', 25);
console.log(cusStr);
console.log(CreateCustomer('John'));
function CreateCustomer(name, age) {
    //return name + age?.toString();
    //return name + (age == undefined ? '' : age?.toString());
    //var ageStr = age == undefined ? '' : age?.toString();
    //return `${name} ${ageStr}`;
    return `${name} ${age == undefined ? '' : age === null || age === void 0 ? void 0 : age.toString()}`;
}
// for (let i = 1; i <=10; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even number: ${i}`);
//   }
//   else {
//     console.log(`Odd number: ${i}`);
//   }
// }
// let i:number = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(`Even number: ${i}`);
//   }
//   else {
//     console.log(`Odd number: ${i}`);
//   }
//   i++;
// }
// let fruit: string = 'apple';
// switch (fruit) {
//     case 'apple' :
//         console.log('Apple');
//         break;
//     case 'banana':
//         console.log('Banana');
//         break;
//     default: 
//     break
// }
