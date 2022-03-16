// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  let results = [];
  let flatArray = [].concat(...arguments);
  // console.log(flatArray);
  for(let i = 0; i < flatArray.length; i++) {
    if(!results.includes(flatArray[i])) {
      results.push(flatArray[i])
    }
  }
  // console.log(results);
  return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//////////////////////////////////////////////////////////////////

function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
