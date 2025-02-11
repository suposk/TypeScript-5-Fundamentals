import { Movie, Logger, ICastMember as Actor } from './interfaces';
import { Performer, ReferenceItem, Documentary } from './classes';
import * as Utility from './functions';


/*

console.log('Beginning search...');
console.log('--------------------------------------');

Utility.Search('George Lucas') //ok
//Utility.Search('xxx') //error
  .catch((error) => console.log(`Error: ${error}`));

console.log('--------------------------------------');
console.log('end of app.ts');

*/

let inventory: Array<Movie> = Utility.GetAllMovies();
let purge: Array<Movie> = Utility.Purge<Movie>(inventory);

console.log(`purged ${purge.length} movies ...`);
