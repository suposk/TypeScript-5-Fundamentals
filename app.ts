import { Movie, Logger, ICastMember as Actor } from './interfaces';
import { Performer, ReferenceItem, Documentary } from './classes';
import * as Utility from './functions';

let myMovie: Movie = {
   title: 'A New Hope',
   director: 'George Lucas',
   yearReleased: 1977,
   streaming: true,
   length: 121,

    logReview: (review: string | number) => {
      console.log(`ReviewLogger: ${review}`);
    }
};

Utility.PrintMovieInfo(myMovie);
if (myMovie.logReview) {
    myMovie.logReview(myMovie.title);
}


let actor: Actor = new Performer();
actor.name = "Harrison Ford";
actor.rehearse(42);


/*
var movies = GetTitles('George Lucas', false);
movies.forEach((title) => console.log(title));
*/

/*
function CreateMovieID(name: string, id: number): string {
return name + id;
}

interface StringGenerator {
  (chars: string, nums: number): string;
};

let x: number;
x = 5;

//let IdGenerator: (chars: string, nums: number) => string;
let IdGenerator: StringGenerator;
//IdGenerator = (name: string, id: number) => name + id;
IdGenerator = CreateMovieID;

let newID: string = IdGenerator('jedi', 20);
console.log(newID);
*/


let refItem = new ReferenceItem('Facts and Figures', 'Random House');
refItem.title = 'Facts and Figures';
var dep = ReferenceItem.department;


let doc = new Documentary('The Force of Sound', 2018, 'Sound Design');
doc.producer = 'Gary Kurtz';
let t : string | undefined;
t = undefined;
//doc.producer = t!;
//doc.printItem();
doc.printCredits();