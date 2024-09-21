//Template Literals
function greet(name,age){
  console.log (`Hello, my name is ${name} and I am ${age} years old`)
}
greet("John",25)

function generateParagraph(){
    return `JavaScript template literals are a way to output variables within a string.
     Before template literals, if you wanted to include variables or expressions within a string,
     you had to use the cumbersome concatenation with the + operator. `
}
generateParagraph()

function calculateSum(a,b){
    console.log (`The sum of 5 and 3 is ${a+b}`)
}
calculateSum(5,3)

function formateCurrency(value){
    return `$${value.toFixed(2)}`;
}
let value =500;
let formattedMessage = `The total amount is ${formateCurrency(value)}`;
console.log(formattedMessage);


let name="john"; let status = true;
function formateMessage(name,status){
    return `Welcome back, ${name}, your status is :${status ? 'active' :'inactive'}`;
}
let message = formateMessage(name , status);
console.log(message);

//Arrow Functions
let add = (a,b) =>{
    return `${a+b}`
}
console.log(add(5,6));

const double =(n) =>n*2;
console.log(double(4));

const greetUser = (name1) => `hello, ${[name1]}`
console.log(greetUser("pooja"));

const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers); 

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.printName = function() {
//     console.log(this.name);
// };

// const person1 = new Person('Pooja');
// person1.printName(); 

function Person(name) {
    this.name = name;
}

Person.prototype.printName = () => {
    console.log(this.name);
};

const person2 = new Person('Pooja');
person2.printName(); 

// Regular Function:

// When you use a regular function (like printName in the first example), this refers to the object that calls the function. In this case, when person1.printName() is called, this is bound to person1, allowing access to the name property.
// Arrow Function:
// Arrow functions do not have their own this context. Instead, they inherit this from the parent scope where they were defined. In the second example, this does not refer to person2, but instead refers to the global context (or undefined in strict mode), resulting in this.name being undefined.

//Object Shorthand

function createPerson1(name, age){
    let obj={}
    obj.name = name;
    obj.age = age;
    return obj;
}
console.log(createPerson1("pooja",26));

function createPerson(name, age) {
    return {
        name,
        age,
        introduce() {
          console.log (`Hi, I'm ${name} and I'm ${age} years old.`);
        }
    };
}
let a1 = createPerson("pooja" ,26);
a1.introduce();

function createObject(key, value) {
    return { [key]: value };
}
console.log(createObject("name1", "pooja"))

function updatePerson(oldPerson, newName) {
    return { ...oldPerson, name: newName };
}

//Default Parameters in Function
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}console.log(greet())

function calculateTotal(price, tax = 0.05) {
    return price + (price * tax);
}
console.log(calculateTotal(100));

function describePerson(name, age = 25) {
    return `${name} is ${age} years old.`;
}
console.log(describePerson("riya"))

function calculateDiscount(price, discount = price * 0.1) {
    return price - discount;
}
console.log(calculateDiscount(100));
console.log(calculateDiscount(200));

function createUser(username, role = "user") {
    return { username, role };
}
console.log(createUser("pooja","Engineer"))

//var vs let vs const
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // var leaks out of block scope
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // let does not leak out of block scope (will cause an error)
}

function createConstantArray() {
    const arr = [1, 2, 3];
    arr.push(4);  // Allowed since array content can be modified
    console.log(arr);
}

function demonstrateTDZ() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
}

function testReDeclaration() {
    var x = 5;
    var x = 10; // Allowed with var
    console.log(x); // Output: 10
    
    let y = 15;
    // let y = 20; // Error: Cannot re-declare 'y' with let
}


function loopWithVarAndLet() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log('var i:', i), 100); // var leaks outside loop
    }

    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log('let j:', j), 100); // let is block-scoped
    }
}
