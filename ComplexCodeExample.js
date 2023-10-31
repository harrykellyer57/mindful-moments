/*
File name: ComplexCodeExample.js
Content: A complex code example demonstrating various features and concepts in JavaScript.  
*/

// Declaration of a class named "Shape"
class Shape {
  constructor(color) {
    this.color = color;
  }
  
  // Setter method for color
  setColor(newColor) {
    this.color = newColor;
  }
  
  // Getter method for color
  getColor() {
    return this.color;
  }
  
  // Abstract method for calculating area (to be implemented by child classes)
  calculateArea() {
    throw new Error("Method 'calculateArea' must be implemented.");
  }
}

// Declaration of a class named "Rectangle" that extends Shape
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  // Implementation of the abstract method "calculateArea" from the parent class "Shape"
  calculateArea() {
    return this.width * this.height;
  }
  
  // Method to display rectangle information
  displayInfo() {
    console.log(`Color: ${this.color}`);
    console.log(`Width: ${this.width}`);
    console.log(`Height: ${this.height}`);
    console.log(`Area: ${this.calculateArea()}`);
  }
}

// Declaration of a function that returns a promise after a delay
function delayedPromise(delayTime, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayTime);
  });
}

// Usage of the delayedPromise function with async/await, promises, and error handling
async function performAsyncOperations() {
  try {
    const result1 = await delayedPromise(1000, "Async Operation 1");
    console.log(result1);
    
    const result2 = await delayedPromise(2000, "Async Operation 2");
    console.log(result2);
    
    const result3 = await delayedPromise(3000, "Async Operation 3");
    console.log(result3);
  } catch(error) {
    console.error(error);
  }
}

// Main program execution

const rectangle1 = new Rectangle("Blue", 5, 10);
const rectangle2 = new Rectangle("Red", 8, 15);

rectangle1.displayInfo();
rectangle2.displayInfo();

performAsyncOperations();