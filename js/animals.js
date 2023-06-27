import { Dog } from "./Dog.js";  // capital D!


const rexas = new Dog('Rexas', 'brown');
const brisius = new Dog('Brisius', 'white');

console.log(rexas);
console.log(brisius);

rexas.isStanding = true;
console.log(rexas);

// Hi, my name is Rexas and my fur is brown.

console.log(rexas.intro()); // .intro -> own method used in the class object!
console.log(brisius.intro()); // .intro -> own method used in the class object!
// .intro method pakeitimus darome klases objekte! 

// born standing or sitting? 
rexas.sit();  // .sit -> own method used in the class object!
console.log(rexas);

rexas.stand(); // .stand -> own method used in the class object!
console.log(rexas);

/*
Console results:
animals.js:7 Dog {name: 'Rexas', color: 'brown', isStanding: false}
animals.js:8 Dog {name: 'Brisius', color: 'white', isStanding: false}
animals.js:11 Dog {name: 'Rexas', color: 'brown', isStanding: true}
animals.js:15 Hi, my name is Rexas and my fur is brown.
animals.js:16 Hi, my name is Brisius and my fur is white.
animals.js:21 Dog {name: 'Rexas', color: 'brown', isStanding: false}
animals.js:24 Dog {name: 'Rexas', color: 'brown', isStanding: true}
*/