// Abstract base class for animals
class Animal {
  constructor() {
    if (this.constructor === Animal)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  // Abstract method - must be implemented by derived classes
  move() {
    throw new Error("Method 'move()' must be implemented.");
  }
  eat() {
    throw new Error("Method 'eat()' must be implemented.");
  }
}

// Abstract base class for vertebrates
class Vertebrate extends Animal {
  constructor() {
    super();
    if (this.constructor === Animal)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  reproduce() {
    console.log(`${this.name} is reproducing via internal fertilization.`);
  }
}

// Abstract base class for invertebrates
class Invertebrate extends Animal {
  constructor() {
    super();
    if (this.constructor === Animal)
      throw new Error(`Can't instantiate Abstract Class ${this.constructor}`);
  }

  reproduce() {
    console.log(`${this.name} is reproducing via external fertilization.`);
  }
}

// Class for arthropods
class Arthropod extends Animal {
  constructor(name, legs) {
    super();
    this.name = name;
    this.limbs = legs;
  }

  // this are the general properties of an athropod


  habitat = "Land and Water";
  diet = "Carnivore or Herbivore";
  skinType = "Exoskeleton";
  temperature_Regulation=  "Cold Blooded"

  move() {
    console.log(`${this.name} is crawling.`);
  }


  // this line of code describes polymorphism as you can see that every animal moves differently 
  eat() {
    console.log(`${this.name} is eating.`);
  }

  // encapsulated method property is private to each animal group 
  #property() {
    console.table(this);
  }

  getProperties(){
    this.#property()
  }
}

// Class for fish
class Fish extends Vertebrate {
  constructor() {
    super();
  }

  // this are the general properties of a fish
  
  habitat = "Water";
  diet = "Carnivore or Herbivore	";
  skinType = "Wet and Slimy";
  limbs = "0: Fishes have fins instead of limbs";
  temperature_Regulation=  "Cold Blooded"


  // this line of code describes polymorphism as you can see that every animal moves differently
  move() {
    console.log(`${this.name} is swimming.`);
  }



  eat() {
    console.log(`${this.name} is eating.`);
  }

  // encapsulated method property is private to each animal group 
  #property() {
    console.table(this);
  }

  getProperties(){
    this.#property()
  }
}

// Class for amphibians
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
  temperature_Regulation=  "Cold Blooded"

  move() {
    console.log(`${this.name} is crawling.`);
  }

  // this line of code describes polymorphism as you can see that every animal moves differently
  eat() {
    console.log(`${this.name} is eating.`);
  }

  // encapsulated method property is private to each animal group 
  #property() {
    console.table(this);
  }

  getProperties(){
    this.#property()
  }
}

// Class for reptiles
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
  temperature_Regulation=  "Cold Blooded"

  move() {
    console.log(`${this.name} is slithering.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

 // encapsulated method property is private to each animal group 
 #property() {
  console.table(this);
}

getProperties(){
  this.#property()
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
  temperature_Regulation=  "Warm Blooded"

  move() {
    console.log(`${this.name} is running.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  // encapsulated method property is private to each animal group 
  #property() {
    console.table(this);
  }

  getProperties(){
    this.#property()
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

  temperature_Regulation=  "Warm Blooded"

  move() {
    console.log(`${this.name} is flying.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

// encapsulated method property is private to each animal group 
  #property() {
    console.table(this);
  }

  // using this metgod to access encapsulated methods
  getProperties(){
    this.#property()
  }
}

// Create some instances of these classes and test their behavior

const butterfly = new Arthropod("Butterfly");

const goldfish = new Fish("Goldfish");

const frog = new Amphibian("Frog");

const tortoise = new Reptile("Tortoise");

const eagle = new Aves("Eagle");

const cat = new Mammal("Cat");

console.log(eagle.getProperties());
console.log(eagle.property()); // this would trow an error as the property is encapsulated

