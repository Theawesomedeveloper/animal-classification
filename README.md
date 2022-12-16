
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

### Inheritance: 
The derived classes inherit the properties and methods of the base class,
allowing them to reuse common functionalities like the eat method

### Polymorphism:
The derived classes can override the base class methods to provide 
unique behavior, allowing them to share a common interface but behave differently.
such as the move method 

### Encapsulation:
The properties and methods of each class are encapsulated within 
the class itself, providing a clear separation of responsibilities and a high degree 
of modularity.

for easy understanding of this code i have attached a sample class diagram 
<img src="images\Animal.png" width="700" height="400">
