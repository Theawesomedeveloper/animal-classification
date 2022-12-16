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

  move() {
    console.log(`${this.name} is crawling.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Class for fish
class Fish extends Vertebrate {
  constructor() {
    super();
  }
  habitat = "Water";
  diet = "Carnivore or Herbivore	";
  skinType = "Wet and Slimy";
  limbs = "0: Fishes have fins instead of limbs";

  move() {
    console.log(`${this.name} is swimming.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Class for amphibians
class Amphibian extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }
  habitat = "Wetland";
  diet = "Carnivore";
  skinType = "Moist and slimy";
  limbs = "2 - 4";

  move() {
    console.log(`${this.name} is crawling.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Class for reptiles
class Reptile extends Vertebrate {
  constructor(name) {
    super(name);
  }
  habitat = "Land and water";
  diet = "Carnivore";
  skinType = "Dry and scaly";
  limbs = "4";

  move() {
    console.log(`${this.name} is slithering.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Class for mammals
class Mammal extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  habitat = "Land";
  diet = "Carnivore, Herbivore, Omnivore";
  skinType = "Fur or hair";
  limbs = "4";

  move() {
    console.log(`${this.name} is running.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Class for birds
class Aves extends Vertebrate {
  constructor(name) {
    super();
    this.name = name;
  }

  habitat = "Land and Air";
  diet = "Carnivore or Herbivore";
  skinType = "Feathers";
  limbs = "2";

  move() {
    console.log(`${this.name} is flying.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  allProperties() {
    console.table(this);
  }
}

// Create some instances of these classes and test their behavior

const butterfly = new Arthropod("Butterfly", 6);

const goldfish = new Fish("Goldfish");

const frog = new Amphibian("Frog");

const tortoise = new Reptile("Tortoise");

const eagle = new Aves("Eagle");

const cat = new Mammal("Cat");
/*
// Abstraction: the Animal base class provides a common interface for the derived classes, 
// allowing us to interact with them in a uniform way.

// Inheritance: the derived classes inherit the properties and methods of the base class,
// allowing them to reuse common functionality.

// Polymorphism: the derived classes can override the base class methods to provide 
// unique behavior, allowing them to share a common interface but behave differently.

// Encapsulation: the properties and methods of each class are encapsulated within 
// the class itself, providing a clear separation of responsibilities and a high degree 
// of modularity.

// Test the behavior of the objects
// frog.move();    // Output: "Frog is crawling."


/*

console.log(frog.color);    // Output: "green"
console.log(snake.length);  // Output: 6
console.log(goldfish.weight);   // Output: 0.5
console.log(dog.fur);    // Output: "brown"
console.log(eagle.wingspan);  // Output: 2
console.log(spider.legs); // Output: 8
*/

/*
Animal	    Habitat	         Diet	                            Skin Type	        Limbs
Amphibian	Wetland	         Carnivore	                         Moist and slimy	  2-4
Reptile	    Land and water	Carnivore	                         Dry and scaly	     4
Fish	     Water	         Carnivore or herbivore	             Wet and slimy	     0
Mammal	    Land	          Carnivore, herbivore, or omnivore 	Fur or hair	      4
Bird	   Land and air	     Carnivore or herbivore	              Feathers	         2
Arthropod	Land and water	Carnivore or herbivore	             Exoskeleton	Multiple (usually 6-8)
*/
