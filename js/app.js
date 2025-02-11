"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const Utility = __importStar(require("./functions"));
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
Utility.PrintMovieInfo(myMovie);
if (myMovie.logReview) {
    myMovie.logReview(myMovie.title);
}
let actor = new classes_1.Performer();
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
let refItem = new classes_1.ReferenceItem('Facts and Figures', 'Random House');
refItem.title = 'Facts and Figures';
var dep = classes_1.ReferenceItem.department;
let doc = new classes_1.Documentary('The Force of Sound', 2018, 'Sound Design');
doc.producer = 'Gary Kurtz';
let t;
t = undefined;
//doc.producer = t!;
//doc.printItem();
doc.printCredits();
//# sourceMappingURL=app.js.map