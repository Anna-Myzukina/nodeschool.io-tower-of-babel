/*Exercise 1

Create a javascript program that takes the the first command-line argument and
outputs it right after a "Hello " String using ES6 template strings.
 */

var arg = process.argv[2];
console.log(`Hello ${arg}`);