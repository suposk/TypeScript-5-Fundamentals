import { Movie, Logger, ICastMember as Actor } from './interfaces';
import { Performer, ReferenceItem, Documentary } from './classes';
import * as Utility from './functions';

function getMoviesByDirector(director: string): Promise<string[]> {
  let p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
      let movies: string[] = Utility.GetTitles(director);
      if (movies.length > 0) {
        resolve(movies);
      } else {
        reject('No movies found for that director.');
      }
      
    }, 2000);       
  });
  return p;

}

console.log('Beginning search...');
console.log('--------------------------------------');
getMoviesByDirector('George Lucas').then((movies) => {
  console.log(`Found movies: ${movies}`);
}).catch((error) => {
  console.log('Error:', error);
});

console.log('Search submitted...');
console.log('--------------------------------------');
console.log('end of app.ts');