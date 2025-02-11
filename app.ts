import { Movie, Logger, ICastMember as Actor } from './interfaces';
import { Performer, ReferenceItem, Documentary, Favorites } from './classes';
import * as Utility from './functions';
import * as _ from 'lodash';

// let inventory: Array<Movie> = Utility.GetAllMovies();
// inventory.forEach(movie => {
//   console.log(_.snakeCase(movie.title));
// });

let doc = new Documentary('The Great Hack', 2019, 'Netflix');
doc.printItem();