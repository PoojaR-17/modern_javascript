# modern_javascript
JavaScript template literals are a way to output variables within a string. Before template literals, if you wanted to include variables or expressions within a string, you had to use the cumbersome concatenation with the + operator.
Arrow function
implicit return: If all you have is a single expression that returns a value, you can get rid of the braces and the return keyword. Its a very common usage.
let newGreet = (greeting, name) => `${greeting}, from ${name}`
In JavaScript, object shorthand is a fantastic feature that simplifies the creation of objects in your code. It allows you to write shorter and more readable syntax when you want to create an object with properties that have the same names as the variables you have defined.
var let const
In JavaScript, variables declared with the 'let' keyword have block scope, meaning they are limited to the block in which they are defined. The 'const' keyword is used to declare constants, whose values cannot be re-assigned. Variables declared with the 'var' keyword are function-scoped, meaning they are accessible within the entire function in which they are defined. In the given code, the first console.log(x) outputs 'undefined' because the variable x is declared later in the code.
