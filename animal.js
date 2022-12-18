('use strict')

// Abstract base class for animals
class Animalia {
  constructor() {
    if (this.constructor === Animalia)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  // Abstract methods - must be implemented by derived classes
  move() {
    throw new Error("Method 'move()' must be implemented.");
  }
  eat() {
    throw new Error("Method 'eat()' must be implemented.");
  }
}

// Abstract base class for vertebrates
class Vertebrate extends Animalia {
  constructor() {
    super();
    if (this.constructor === Vertebrate)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  reproduce() {
    console.log(`${this.name} is reproducing via internal fertilization.`);
  }
}

// Abstract base class for invertebrates
class Invertebrate extends Animalia {
  constructor() {
    super();
    if (this.constructor === Invertebrate)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  reproduce() {
    console.log(`${this.name} is reproducing via external fertilization.`);
  }
}

/*======================== ATHROPODS CLASS ===================== */
class Arthropod extends Invertebrate {
  constructor(name, legs) {
    super();
    this.name = name;
    this.limbs = legs;
  }

  // this are the general properties of an athropod
  habitat = "Land and Water";
  diet = "Carnivore or Herbivore";
  skinType = "Exoskeleton";
  temperature_Regulation = "Cold Blooded";

  // this an encapsulated method
  #eat() {
    console.log(`${this.name} is eating.`);
  }

  // this calls the encapsulated method
  feed() {
    this.#eat();
  }


  // this line of code describes polymorphism as you can see that every animal moves differently
  move() {
    console.log(`${this.name} is crawling.`);
  }

  //another encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  getProperties() {
    this.#property();
  }
}

/*======================== FISH CLASS ===================== */
class Fish extends Vertebrate {
  constructor(name) {
    super();
    this.name = name
  }

  // this are the general properties of a fish

  habitat = "Water";
  diet = "Carnivore or Herbivore	";
  skinType = "Wet and Slimy";
  hasFins = true;
  temperature_Regulation = "Cold Blooded";

  // this line of code describes polymorphism as you can see that every animal moves differently
  move() {
    console.log(`${this.name} is swimming.`);
  }

  // this an encapsulated method
  #eat() {
    console.log(`${this.name} is eating.`);
  }

  feed() {
    this.#eat();
  }

  // encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  getProperties() {
    this.#property();
  }
}

/*======================== AMPHIBIANS CLASS ===================== */
class Amphibian extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  // this are the general properties of an amphibian

  habitat = "Wetland";
  diet = "Carnivore";
  skinType = "Moist and slimy";
  limbs = "2 - 4";
  temperature_Regulation = "Cold Blooded";

  // this line of code describes polymorphism as you can see that every animal moves differently
  move() {
    console.log(`${this.name} is crawling.`);
  }

  // this an encapsulated method

  #eat() {
    console.log(`${this.name} is eating.`);
  }

  feed() {
    this.#eat();
  }

  // encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  getProperties() {
    this.#property();
  }
}

/*======================== REPTILE CLASS ===================== */
class Reptile extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  // this are the general properties of an reptile

  habitat = "Land and water";
  diet = "Carnivore";
  skinType = "Dry and scaly";
  limbs = "4";
  temperature_Regulation = "Cold Blooded";

  move() {
    console.log(`${this.name} is slithering.`);
  }

  // this an encapsulated method
  #eat() {
    console.log(`${this.name} is eating.`);
  }
// this calls the primate method eat
  feed() {
    this.#eat();
  }

  // encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  getProperties() {
    this.#property();
  }
}

// Class for mammals
class Mammal extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  // this are the general properties of a mammal

  habitat = "Land";
  diet = "Carnivore, Herbivore, Omnivore";
  skinType = "Fur or hair";
  limbs = "4";
  temperature_Regulation = "Warm Blooded";

  move() {
    console.log(`${this.name} is running.`);
  }

  // this an encapsulated method
  #eat() {
    console.log(`${this.name} is eating.`);
  }

  feed() {
    this.#eat();
  }

  // encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  getProperties() {
    this.#property();
  }
}

// Class for birds
class Aves extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  // this are the general properties of a bird

  habitat = "Land and Air";
  diet = "Carnivore or Herbivore";
  skinType = "Feathers";
  limbs = "2";
  temperature_Regulation = "Warm Blooded";

  move() {
    console.log(`${this.name} is flying.`);
  }

  // this an encapsulated method

  #eat() {
    console.log(`${this.name} is eating.`);
  }

  feed() {
    this.#eat();
  }

  // encapsulated method property is private to each animal group
  #property() {
    console.table(this);
  }

  // using this metgod to access encapsulated methods
  getProperties() {
    this.#property();
  }
}

// Create some instances of these classes and test their behavior

const butterfly = new Arthropod("Butterfly");

const goldfish = new Fish("Goldfish");

const frog = new Amphibian("Frog");

const tortoise = new Reptile("Tortoise");

const eagle = new Aves("Eagle");

const cat = new Mammal("Cat");



// INHERTANCE
butterfly.reproduce() // inherited from the  INvertebrate Class

eagle.reproduce() // inherited from the Veterbrate class



// ENCAPSULATION

butterfly.feed() // this calls the eat method which in turn calls the private method eat()

cat.feed() // this calls the eat method which in turn calls the private method eat()


// POLYMORPHISM

butterfly.move() // as your can see the method give a different output depending on the animal

tortoise.move() // as your can see the method give a different output depending on the animal

// ABSTRACTION

const goat = new Animalia() // this will throw an error to the console 





