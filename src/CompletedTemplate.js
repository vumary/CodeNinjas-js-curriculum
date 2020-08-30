/* NOTE: just try and over explain everything while they are coding, even though they might not 
actually listen, they might learn something from the constant reiteration. Read the notes on the 
google docs so they know **what** they are coding, and more importantly **why** they are coding. 
im putting this note here bc there's a lot missing from just this pen alone to make the camp a 
better learning experience. this is just the completed template. please look at google doc notes 
too. */

// this is a single line comment! try writing one of your own below:
// if you are ever waiting for the class to catch up,
// i want you to be commenting your code :)

// write 2-3 print statements below:
console.log("hello world!");
console.log("what your favorite food?");
console.log("hope yall are doing well today");

// try using a method below:
Math.random();  // returns a value greater than or equal to 0.0 and less than 1.0
// uh oh, we can't really see that value... so we have to print it!
// do you remember how to print? try printing it yourself below these comments
// hint: put the Math.random() into the parenthesis of the print statement
/* i space one the parenthesis for the kids to see and not get a syntax error, but this
isnt something they have to do */
console.log( Math.random() );

// adding strings together is called "concatenation"
// you can add strings together like this:
console.log( "random number: " + Math.random() );

// variables types: String, Boolean, Integer, Double
// create a variable for each type below and have at least one "let" & "const"
let age = 17;
let lateToWork = true;
const name = "Elvis Presley"
const wholeNum = 23;
const myDouble = 2.3

// print 1 or more of your variables below:
console.log("My name's " + name + ".");
console.log("My favorite number is " + wholeNum + "!");

// arithmetic operations: addition (+), subtraction (-), division (/) 
// use each arithemetic operator by printings or setting it to a variable below:
const addNums = 2+3;
console.log("2 + 3 = " + addNums );
console.log(3-2);
console.log(10/4);

// create an if-else statements below:
if (true) { // create hypothetical conditions for them and ask questions for engagement
  console.log("I will print if the condition in the paranthesis above is true!");
} else if (true) {
  console.log("I will print if the first condition is false AND the second condition is true!");
} else {
  console.log("I will print if all the statements are false!");
}

// create at least one function below:
function mult(a, b){
  return a*b;
}

function add(a, b){
  return a+b;
}

function divid(a, b) {
  return a/b;
}

// call your function(s) and print to prove they work below:
const myAdd = add(2,3);
console.log("my add function result: " + myAdd);
console.log("my mult function result: " + mult(2,3));
console.log(divid(2,3));