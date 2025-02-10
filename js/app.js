"use strict";
let myMovie = {
    title: 'A New Hope',
    director: 'George Lucas',
    yearReleased: 1977,
    streaming: true,
    length: 121,
    logReview: (review) => {
        console.log(`ReviewLogger: ${review}`);
    }
};
PrintMovieInfo(myMovie);
if (myMovie.logReview) {
    myMovie.logReview(myMovie.title);
}
class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    rehearse(sceneNumber) {
        console.log(`Rehearsing scene ${sceneNumber}`);
    }
}
let actor = new Performer();
actor.name = "Harrison Ford";
actor.rehearse(42);
function GetAllMovies() {
    return [
        { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
        { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
        { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
        { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
        { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
        { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
        { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
        { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
        { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
    ];
}
function GetReview(title) {
    if (title == 'A New Hope') {
        return 'An instant classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
function PrintMovieInfo(movie) {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
}
function GetTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    if (streaming !== undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            }
        }
    }
    else {
        for (let movie of allMovies) {
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
    return searchResults;
}
var movies = GetTitles('George Lucas', false);
movies.forEach((title) => console.log(title));
function CreateMovieID(name, id) {
    return name + id;
}
;
let x;
x = 5;
//let IdGenerator: (chars: string, nums: number) => string;
let IdGenerator;
//IdGenerator = (name: string, id: number) => name + id;
IdGenerator = CreateMovieID;
let newID = IdGenerator('jedi', 20);
console.log(newID);
