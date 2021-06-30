console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end hello
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log(`Hello, ${name}!`);
  return name;
} // end helloName
// Remember to call the function to test
helloName('Jon Snow');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let result = firstNumber + secondNumber;
  return result;
  // return firstNumber + secondNumber;
} // end addNumbers
console.log('running addNumbers:', addNumbers(34, 89));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  let multAnswer = num1 * num2 * num3;
  return multAnswer;
} // end multiplyThree
console.log('running multiplyThree:', multiplyThree(5, 15, 600));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } //end if
  else {
    return false;
  } //end else
} //end isPositive
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    let lastItem = array[array.length - 1];
    return lastItem;
  }// end if
  else {
    return 'undefined';
  } //end else
} //end getLast
let composerArray = ['Bach', 'Mozart', 'Beethoven', 'Schubert', 'Schumann',
  'Verdi', 'Puccini'];
console.log(composerArray);
console.log('running getLast:', getLast(composerArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (const element of array) {
    if (element === value) {
      return true;
    } //end if
  } //end for
  return false;
} //end find
let valueArray = [23,78,985,42,13,1200];
console.log('running find:', find(42, valueArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string [0]) {
    return true;
  } //end if
  else {
    return false;
  } //end else
} //end isFirstLetter
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let numArray = [2,10,47,62,7,19,112];
console.log('running sumAll:', sumAll(numArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
