interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; //optional
}

interface Gretable extends Named {
  greet(phrase: string): void;
}

class Person implements Gretable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(prase: string) {
    if (this.name) {
      console.log(prase + " " + this.name);
    } else {
      console.log("H! ");
    }
  }
}

let user1: Gretable;
user1 = new Person("Alex");
user1 = new Person(); //called with optional params
//user1.name = 'Olha' //Cannot assign to 'name' because it is a read-only property

user1.greet("Hi there - my name is");
console.log(user1);

// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string):void;
// }

// let user1: Person;

// user1 = {
//     name: "Alex",
//     age: 30,

//     greet(prase: string) {
//         console.log(prase + ' ' + this.name);
//     }
// }

// user1.greet('Hi ther - I am');
