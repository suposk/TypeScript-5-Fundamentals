interface Movie {
    title: string,
    director: string,
    yearReleased: number,
    streaming: boolean,
    length?: number,

    logReview?: (review: string | number) => void
}  

let myMovie: Movie = {
   title: 'A New Hope', 
   director: 'George Lucas', 
   yearReleased: 1977, 
   streaming: true,
   length: 121, 

    logReview: (review: string | number) => {
      console.log(`logReview Review: ${review}`);
    }
};

PrintMovieInfo(myMovie);
if (myMovie.logReview) {
    myMovie.logReview(myMovie.title);
}

function GetAllMovies(): Movie[] {
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

  function GetReview(title: string): string | number {
    if (title == 'A New Hope') {
      return 'An instant classic!';
    }
    else {
      return Math.floor(Math.random() * 10);
    }
  }

  function PrintMovieInfo(movie: Movie): void {
    console.log(`Title: ${movie.title}`);
    console.log(`Year Released: ${movie.yearReleased}`);
    console.log(`Director: ${movie.director}`);
  }


function GetTitles(director: string): string[];
function GetTitles(director: string, streaming: boolean): string[];
function GetTitles(director: string, streaming?: boolean): string[] {
    const allMovies = GetAllMovies();
    const searchResults :string[] = [];

    if(streaming !== undefined) {
        for(let movie of allMovies) {
          if(movie.director === director && movie.streaming === streaming) {
            searchResults.push(movie.title);
          }
        }
      } else {
        for(let movie of allMovies) {
          if(movie.director === director) {
            searchResults.push(movie.title);
          }
        }
      }
      return searchResults;

}

var movies = GetTitles('George Lucas', false);
movies.forEach((title) => console.log(title));

function CreateMovieID(name: string, id: number): string {
return name + id;
}

let x: number;
x = 5;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => name + id;

let newID: string = IdGenerator('jedi', 20);
console.log(newID);
