
# Animal Classification

This is a little demonstration of the 4 pillars of OOP using Javascript


## Task
 The University of Learnable (UL) have had problems with the classification and nomenclature of animals due to the system that aids them. This was due to the language the last programmer used when she modelled this domain of knowledge. He used Pascal Programming language, which is a procedural programming language. They decided to re-model everything using a modern language because of its benefits (OOP, among others). JavaScript was chosen.

Luckily, you are a modern developer who happens to be a student of UL and a student of Learnable'22. You have been invited and hired by your school's biological and life sciences faculty to use JavaScript to model a simple Classification for Kingdom Animalia.

You have been presented with the following simple image. Study the image.

<img src="images\Animal-Kingdom-Classification-of-Animal-Kingdom.png" width="700" height="400">


## Run Locally

Clone the project

```bash
  git clone https://github.com/Theawesomedeveloper/animal-classification.git
```

Go to the project directory

```bash
  cd animal-classification
```

Run code
```bash
node animal.js
```

## Decription
This code demonstrates the following 

 ### Abstraction:
 The Animal base class provides a common interface for the derived classes, 
 allowing us to interact with them in a uniform way.
 
 ## Example
 ```javascript
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

const cow = new Animalia() // this would throw an error to the console since Animalia is an Abstract base Class
 ```

### Inheritance: 
The derived classes inherit the properties and methods of the base class,
allowing them to reuse common functionalities like the eat method

 ## Example
 ```javascript
 /*
 as seen the fish class inherits the vetebrate class 
thereby allowing all sub classes to reproduce
*/
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


 ```

### Polymorphism:
The derived classes can override the base class methods to provide 
unique behavior, allowing them to share a common interface but behave differently.
such as the move method 
 ## Example
 ```javascript
 
class Reptile extends Vertebrate {
  move() {
    console.log(`${this.name} is slithering.`);
  }
}

// difers from the way the other classes move

class Fish extends Vetebrate{
move(){
console.log(`${this.name} is swimming`)
}
}
 
 ```

### Encapsulation:
The properties and methods of each class are encapsulated within 
the class itself, providing a clear separation of responsibilities and a high degree 
of modularity.

 ## Example
 ```javascript
 class Mammal {
 // encapsulated method eat
  #eat() {
    console.log(`${this.name} is eating.`);
  }
// this calls the private method eat
  feed() {
    this.#eat();
  }
 }
 ```

for easy understanding of this code i have attached a sample class diagram 
#### NOTE: This class diagram isn't being maintained, so there might be some inconsistencies with it and the actual code
<img src="images\Animal.png" width="700" height="400">
