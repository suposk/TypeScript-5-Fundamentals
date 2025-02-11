import { Movie, Logger, ICastMember as Actor } from './interfaces';
import { Performer, ReferenceItem, Documentary, Favorites } from './classes';
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
let favorites: Favorites<Movie> = new Favorites<Movie>();
inventory.forEach(movie => favorites.addItem(movie));

favorites.printTitles();

let first: Movie = favorites.getFirst();
console.log(`First item: ${first.title}`);


