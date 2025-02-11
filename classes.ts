import { Movie, Logger, ICastMember } from './interfaces';

export class Performer implements ICastMember{
    name: string = "";
    email: string = "";
    role: string = "";

    rehearse(sceneNumber: number): void {
        console.log(`Rehearsing scene ${sceneNumber}`);
    }
}


export class ReferenceItem {
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



abstract class Video {

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
  
    constructor(public title: string, protected year: number)
    {
      console.log('Creating a new Video...');
    }
  
    printItem(): void {
      console.log(`${this.title} was released in ${this.year}`);
      console.log(`description: ${Video.description}`);
    }
  
    abstract printCredits(): void;
  
  }
  
  export class Documentary extends Video {
    constructor(title: string, year: number, public subject: string) {
      super(title, year);
    }
  
    printCredits(): void {
      console.log(`Credits: Produced by ${this.producer}`);
    }
  
    printItem(): void {
      super.printItem();
      console.log(`Subject: ${this.subject} (${this.year})`);
    }
  }

  export class Favorites<T>{
    private _items: Array<T> = new Array<T>();

    addItem(item: T): void {
      this._items.push(item);
    }

    getFirst(): T {
      return this._items[0];
    }

    getItems(): Array<T> {
      return this._items;
    }
  }
  