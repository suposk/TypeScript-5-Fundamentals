"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Documentary = exports.ReferenceItem = exports.Performer = void 0;
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
exports.Performer = Performer;
class ReferenceItem {
    get editor() {
        return this._editor;
    }
    set editor(newEditor) {
        if (newEditor === undefined) {
            throw new Error('Editor name cannot be undefined');
        }
        this._editor = newEditor;
    }
    constructor(title, publisher) {
        this.title = title;
        this.publisher = publisher;
        this._editor = "";
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published by ${this.publisher}`);
    }
    myMethod() {
        this.title = 'New Title';
        this.publisher = 'New Publisher';
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = 'Research';
class Video {
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        if (newProducer === undefined) {
            throw new Error('Producer name cannot be undefined');
        }
        this._producer = newProducer;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this._producer = "";
        console.log('Creating a new Video...');
    }
    printItem() {
        console.log(`${this.title} was released in ${this.year}`);
        console.log(`description: ${Video.description}`);
    }
}
Video.description = 'some description';
class Documentary extends Video {
    constructor(title, year, subject) {
        super(title, year);
        this.subject = subject;
    }
    printCredits() {
        console.log(`Credits: Produced by ${this.producer}`);
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject} (${this.year})`);
    }
}
exports.Documentary = Documentary;
class Favorites {
    constructor() {
        this._items = new Array();
    }
    addItem(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
    getItems() {
        return this._items;
    }
}
exports.Favorites = Favorites;
//# sourceMappingURL=classes.js.map