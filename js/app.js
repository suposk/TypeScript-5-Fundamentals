"use strict";
function CreateCustomer(name, age) {
    //return name + age?.toString();
    //return name + (age == undefined ? '' : age?.toString());
    //var ageStr = age == undefined ? '' : age?.toString();
    //return `${name} ${ageStr}`;
    return `${name} ${age == undefined ? '' : age === null || age === void 0 ? void 0 : age.toString()}`;
}
console.log(CreateCustomer('John', 25));
console.log(CreateCustomer('John'));
function GetBooks(title, ...IDs) {
    for (let id of IDs) {
        console.log(id);
    }
    IDs.forEach(element => console.log(element));
    let books = [
        { title: 'Book1', author: 'Author1', available: true },
        { title: 'Book2', author: 'Author2', available: false },
        { title: 'Book3', author: 'Author3', available: true }
    ];
    return books.filter(book => book.title === title);
}
let book1 = GetBooks('Book1', 2, 3);
console.log(book1);
console.log("end");
