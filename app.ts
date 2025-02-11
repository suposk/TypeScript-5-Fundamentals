// interface Movie {
//     title: string,
//     director: string,
//     yearReleased: number,
//     streaming: boolean,
//     length?: number,

//     //logReview?: (review: string | number) => void
//     logReview?: ReviewLogger
// }  

// interface ReviewLogger {
//     (review: string): void;
// }

// let myMovie: Movie = {
//    title: 'A New Hope', 
//    director: 'George Lucas', 
//    yearReleased: 1977, 
//    streaming: true,
//    length: 121, 

//     logReview: (review: string | number) => {
//       console.log(`ReviewLogger: ${review}`);
//     }
// };

// PrintMovieInfo(myMovie);
// if (myMovie.logReview) {
//     myMovie.logReview(myMovie.title);
// }

// interface Person {
//     name: string,
//     email: string,
// }

// interface Director extends Person {
//     numberOfMoviesDirected: number,
// }

// interface ICastMember extends Person {
//     role: string,
//     rehearse:(sceneNumber: number) => void,
// }

// class Performer implements ICastMember{
//     name: string = "";
//     email: string = "";
//     role: string = "";

//     rehearse(sceneNumber: number): void {
//         console.log(`Rehearsing scene ${sceneNumber}`);
//     }
// }

// let actor: ICastMember = new Performer();
// actor.name = "Harrison Ford";
// actor.rehearse(42);

// function GetAllMovies(): Movie[] {
//     return [
//       { title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true },
//       { title: 'The Empire Strikes Back', director: 'Irvin Kershner', yearReleased: 1980, streaming: false },
//       { title: 'Return of the Jedi', director: 'Richard Marquand', yearReleased: 1983, streaming: true },
//       { title: 'The Phantom Menace', director: 'George Lucas', yearReleased: 1999, streaming: false },
//       { title: 'Attack of the Clones', director: 'George Lucas', yearReleased: 2002, streaming: true },
//       { title: 'Revenge of the Sith', director: 'George Lucas', yearReleased: 2005, streaming: true },
//       { title: 'The Force Awakens', director: 'J.J. Abrams', yearReleased: 2015, streaming: false },
//       { title: 'The Last Jedi', director: 'Rian Johnson', yearReleased: 2017, streaming: true },
//       { title: 'The Rise of Skywalker', director: 'J.J. Abrams', yearReleased: 2019, streaming: true }
//     ];
//   }

//   function GetReview(title: string): string | number {
//     if (title == 'A New Hope') {
//       return 'An instant classic!';
//     }
//     else {
//       return Math.floor(Math.random() * 10);
//     }
//   }

//   function PrintMovieInfo(movie: Movie): void {
//     console.log(`Title: ${movie.title}`);
//     console.log(`Year Released: ${movie.yearReleased}`);
//     console.log(`Director: ${movie.director}`);
//   }


// function GetTitles(director: string): string[];
// function GetTitles(director: string, streaming: boolean): string[];
// function GetTitles(director: string, streaming?: boolean): string[] {
//     const allMovies = GetAllMovies();
//     const searchResults :string[] = [];

//     if(streaming !== undefined) {
//         for(let movie of allMovies) {
//           if(movie.director === director && movie.streaming === streaming) {
//             searchResults.push(movie.title);
//           }
//         }
//       } else {
//         for(let movie of allMovies) {
//           if(movie.director === director) {
//             searchResults.push(movie.title);
//           }
//         }
//       }
//       return searchResults;

// }

// var movies = GetTitles('George Lucas', false);
// movies.forEach((title) => console.log(title));

// function CreateMovieID(name: string, id: number): string {
// return name + id;
// }

// interface StringGenerator {
//   (chars: string, nums: number): string;
// };

// let x: number;
// x = 5;

// //let IdGenerator: (chars: string, nums: number) => string;
// let IdGenerator: StringGenerator;
// //IdGenerator = (name: string, id: number) => name + id;
// IdGenerator = CreateMovieID;

// let newID: string = IdGenerator('jedi', 20);
// console.log(newID);

/*
class ReferenceItem {
  private _editor: string= "";
  get editor(): string {
    return this._editor;
  }
  set editor(newEditor: string) {
      if (newEditor === undefined) {
      throw new Error('Editor name cannot be undefined');
    }
    this._editor = newEditor;
  }

  constructor(public title: string, protected publisher?: string) {
    console.log('Creating a new ReferenceItem...');
  }

  static department: string = 'Research';

  printItem(): void {
    console.log(`${this.title} was published by ${this.publisher}`);
  }

  myMethod(): void {
    this.title = 'New Title';
    this.publisher = 'New Publisher';
  }
}

let refItem = new ReferenceItem('Facts and Figures', 'Random House');
refItem.title = 'Facts and Figures';
var dep = ReferenceItem.department;

*/

// class Video {
//   title: string = "";
//   year: number = 0;

//   constructor(newTitle: string, newYear: number)
//   {
//     this.title = newTitle;
//     this.year = newYear;
//     console.log('Creating a new Video...');    
//   }

//   printItem(): void {
//     console.log(`${this.title} was released in ${this.year}`);
//   }

// }

class Video {

  private _producer: string = "";
  static description: string = 'some description';

  get producer(): string {
    return this._producer.toUpperCase();
  }

  set producer(newProducer: string) {
    if (newProducer === undefined) {
      throw new Error('Producer name cannot be undefined');
    }
    this._producer = newProducer;
  }

  constructor(public title: string, private year: number)
  {
    console.log('Creating a new Video...');    
  }

  printItem(): void {
    console.log(`${this.title} was released in ${this.year}`);
    console.log(`description: ${Video.description}`);
  }

}

/*
var vid = new Video('Star Wars', 1977);
vid.producer = 'Gary Kurtz';
const a = Video.description;
a.replace('movie', 'film');
vid.printItem();
console.log(vid.producer);

*/

class Documentary extends Video{
  subject: string = "";

}

let doc = new Documentary('The Force of Sound', 2018);
doc.printItem();