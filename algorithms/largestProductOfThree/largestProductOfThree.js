/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  var result = 1;
  var numArray = array.slice();
  numArray = numArray.sort(function(a, b) { return b - a; });
  for ( var i = 0; i < 3; i++ ) {
    result *= numArray[i];
  }
  return result;
};
console.log(largestProductOfThree([2, 1, 3, 7]));
