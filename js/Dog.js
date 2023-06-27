// Kiti puslapiai NEVEIKIA, nes pridejom animals klase for practice
// and changed main html for that!


// object is like recipe book, we need to ingredients to start to coock to see the result
// to coock it we employ: .this and turn the result: -> methods / !!NO!! functions within the object!

export class Dog {             // reikia constructor panaudoti objekta
    constructor(name, color) {
        this.name = name;          // naudojam this. 
        this.color = color;
        this.isStanding = false;
    }
// issikvieciame savo method manupulioti objekta, ne function!
    intro() {
        return `Hi, my name is ${this.name} and my fur is ${this.color}.`;
    }

    sit() {
        this.isStanding = false;
    }

    stand() {
        this.isStanding = true;
    }
} // closing class object!