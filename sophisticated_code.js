/*
   ** Filename: sophisticated_code.js **
   Content: Elaborate and complex code example showcasing various programming concepts
*/

// Creating a class for a Person
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  introduce() {
    console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
  }
}

// Creating an instance of Person
const person1 = new Person("John", "Doe", 25);
person1.introduce();

// Creating a subclass of Person called Employee
class Employee extends Person {
  constructor(firstName, lastName, age, position, salary) {
    super(firstName, lastName, age);
    this.position = position;
    this.salary = salary;
  }

  changePosition(position) {
    this.position = position;
    console.log(`${this.getFullName()} has been promoted to ${this.position}.`);
  }

  increaseSalary(increment) {
    this.salary += increment;
    console.log(`Salary of ${this.getFullName()} has been increased to $${this.salary}.`);
  }
}

// Creating an instance of Employee
const employee1 = new Employee("Alice", "Smith", 30, "Manager", 50000);
employee1.introduce();
employee1.changePosition("Senior Manager");
employee1.increaseSalary(10000);

// Implementing a function using arrow (=>) notation
const multiply = (a, b) => a * b;

console.log(`Result of multiplication: ${multiply(5, 10)}`);

// Creating a higher-order function
const calculate = (num1, num2, operation) => operation(num1, num2);

const addition = (a, b) => a + b;
console.log(`Result of addition: ${calculate(10, 5, addition)}`);

// Implementing asynchronous programming using Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        message: "Data fetched successfully.",
        timestamp: new Date().toISOString()
      };
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Creating an async function using async/await
const processData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

processData();

// Implementing a closure
const createCounter = () => {
  let count = 0;
  return {
    increment: () => { count++; },
    decrement: () => { count--; },
    getCount: () => count
  };
};

const counter = createCounter();
console.log(`Counter value: ${counter.getCount()}`);
counter.increment();
counter.increment();
console.log(`Counter value after increment: ${counter.getCount()}`);
counter.decrement();
console.log(`Counter value after decrement: ${counter.getCount()}`);

// Implementing a recursive function
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(`Fibonacci sequence:`);
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

// Creating an array and using array methods
const fruits = ["apple", "banana", "orange"];
console.log(`Current fruits: ${fruits}`);
fruits.push("grape");
console.log(`Updated fruits: ${fruits}`);
console.log(`Index of "banana": ${fruits.indexOf("banana")}`);
fruits.forEach(fruit => console.log(fruit));

// Implementing event handling
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Creating a timer using setInterval function
let timerCount = 0;
const timer = setInterval(() => {
  console.log(`Timer: ${timerCount++}`);
  if (timerCount > 5) {
    clearInterval(timer);
    console.log("Timer stopped.");
  }
}, 1000);