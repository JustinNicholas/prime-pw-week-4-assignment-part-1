console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log('Hello', helloName('Justin'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum = firstNumber + secondNumber;
  return sum;
}

console.log('The sum of the 3 & 4 =', addNumbers( 3, 4 ));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;
}

console.log('The result of 3x4x5 =', multiplyThree( 3, 4, 5 ));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}

// console.log('The function should return true of number = 1. Result =', isPositive(1));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if ( array.length > 0){
    return array[array.length-1];
  } else {
    console.log('undefined');
  }
}

console.log('This should return 5', getLast([ 1, 2, 3, 5]));
console.log('This should return undefined', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for ( i=0; i<array.length; i++){
    if (value === array[i]){
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

console.log('This should log false, true, false, false, false', find( 2, [ 10, 2, 6, 3, 5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if ( string.charAt(0) === letter ){
    return true;
  } else {
    return false;
  }

}
console.log( 'isFirstLetter where letter is "A" - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter where letter is "Z"- should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  // TODO: loop to add items
  for ( i=0; i<array.length; i++ ){
    sum += array[i];
  }

  return sum;
}

console.log('This should sum array of [ 1, 2, 3, 4, 5, 6 ] and equal 21. sum =', sumAll([ 1, 2, 3, 4, 5, 6]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let posArray = [];

function positiveArray( inputArray ){
  for ( i=0; i<inputArray.length; i++){
    if ( inputArray[i] > 0 ){
      posArray.push(inputArray[i]);
    } else {

    }
  }
}

positiveArray([ 1, -6, 5, 7, 0, -12, 2])
console.log('This should console log only 1, 5, 7, and 2', posArray);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
