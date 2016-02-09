/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var result = [];
  var frequency = {};

  for ( var i = 0; i < string.length; i++ ) {
    if ( frequency[string[i]] === undefined ) {
      frequency[string[i]] = 1;
    } else {
      frequency[string[i]]++;
    }
  }

  for ( var key in frequency ) {
    var temp = [];
    temp[0] = key;
    temp[1] = frequency[key];
    result.push(temp);
  }
  result = result.sort();
  result = result.sort(function(a, b) { return b[1] - a[1]; });

  return result;
};

console.log(characterFrequency('mmmaaaiiibbb'));
