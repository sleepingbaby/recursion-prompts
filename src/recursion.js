/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) return null;
  if (n === 0) return 1;

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  var lastNum = array[array.length - 1];
  return lastNum + sum(array.slice(0, array.length - 1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

// arraySum([1, [2,3]])
var arraySum = function(array) {
  var tempArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      tempArr.push(...array[i]);
    } else {
      tempArr.push(array[i]);
    }
  }
  const isArr = (element) => Array.isArray(element);
  if (tempArr.some(isArr)) {
    return arraySum(tempArr);
  }

  return sum(tempArr);
};


// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 1) return false;
  if (n === 0) return true;

  if (n < 0) return isEven(n + 2);
  if (n > 0) return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) return 0;
  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  } else {
    return (n - 1) + sumBelow(n - 1);
  }
};


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  var results = [];
  if ((x === y) || (x + 1) === y || (x - 1) === y) return results;
  if (x > y) {
    results.push(x - 1);
    return results.concat(range((x - 1), y));
  } else {
    results.push(x + 1);
    return results.concat(range((x + 1), y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) {
    return 1 / (base * exponent(base, -exp - 1));
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) return true;
  if (n <= 0) {
    return false;
  }
  return powerOfTwo(n/2.0);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var reversed = [];
  if (string.length === 0) return reversed;
  var stringArr = string.split('');
  reversed.push(stringArr.pop());

  return reversed.concat(reverse(stringArr.join(''))).join('');
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.split(' ').join('');
  if (string.length === 1 || string.length === 0) return true;
  if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    return palindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// modulo(-13, 2) // -1
var modulo = function(x, y) {
  if (y === 0) { return NaN; }

  if (x < 0) { return -modulo(-x, y); }
  if (y < 0) { return modulo(x, -y); }
  if (x < y) { return x; }


  return modulo((x - y), y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + (multiply(x, (y + 1)));
  } else {
    return x + (multiply(x, (y - 1)));
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) { return NaN; }
  var isNegative;

  if (x < 0 && y > 0) {
    isNegative = true;
    x = -x;
  } else if (x > 0 && y < 0) {
    isNegative = true;
    y = -y;
  } else if (x < 0 && y < 0) {
    y = -y;
    x = -x;
  }

  if (x < y) { return 0; }

  if (isNegative) {
    return -1 + divide(x-y, y);
  } else {
    return 1 + divide(x-y, y);
  }
}


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) { return null; }
  if (x === 0) { return y; }
  if (y === 0) { return x; }

  var remainder;
  remainder = modulo(x, y);
  return gcd(y, remainder);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1[0] !== str2[0]) { return false; };
  if (str1.length === 0 || str2.length === 0) { return true; }

  return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) { return []; }

  var letter = [str.split('').shift()];
  str = str.split('');
  str.shift();

  return letter.concat(createArray(str.join('')));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) { return []; }

  var lastEle = [array[array.length - 1]];
  array.pop();

  return lastEle.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) { return []; }

  return [value].concat(buildList(value, length - 1));
};

// var buildList = function(value, length, arr=[]) {
//   if (arr.length === length) { return arr; }

//   arr.push(value);
//   return buildList(value, length, arr);
// }

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  if (n === 0) { return []; }

  if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat(['FizzBuzz']);
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat(['Fizz']);
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat(['Buzz']);
  } else {
    return fizzBuzz(n - 1).concat([String(n)]);
  }

};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) { return 0;}

  return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) { return []; }

  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var property in obj) {
    if (property === key) { count++; }

    if (typeof obj[property] === 'object') {
      count += countKeysInObj(obj[property], key);
    }
  }

  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var property in obj) {
    if (obj[property] === value) { count++; }

    if (typeof obj[property] === 'object') {
      count += countValuesInObj(obj[property], value);
    }
  }

  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }

  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) { return null; }
  if (n === 1) {
    return [0, 1];
  } else {
    var arr = fibonacci(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) { return null; }
  if (n === 0) { return 0; }
  if (n === 1) { return 1;}
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) { return []; }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) { return []; }
  var capitalized = array[0][0].toUpperCase() + array[0].slice(1);
  return [capitalized].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = 0;
  for (key in obj) {
    if (obj[key] % 2 === 0) {
      count += obj[key];
    }
    if (typeof obj[key] === 'object') {
      count += nestedEvenSum(obj[key]);
    }
  }

  return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flattened = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened.push(...flatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj || {};
  if (str.length === 0) { return obj; }

  if (!(obj[str[0]])) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }

  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
// compress([1,2,2]);
// list = [1, 2, 2];
// c1 = compress([1, 2]); // dives and gets [1, 2]
// if () // does not push 2 into c1
// // returns [1, 2]

// list = [1, 2];
// c2 = compress([1]); // dives and gets [1];
// if () // pushes 2 into c2
// // returns [1, 2] and ascends


// list = [1];
// c3 = compress([]); // returns [];
// if () // pushes 1 into c3
// // returns [1] and ascends




var compress = function(list) {
  if (list.length === 0) { return []; }

  var arr = compress(list.slice(0, list.length - 1));
  if (arr[arr.length - 1] !== list[list.length - 1]) {
    arr.push(list[list.length - 1]);
  }
  return arr;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) { return []; }

  var newArr = array[array.length - 1];
  newArr.push(aug);
  var arr = augmentElements(array.slice(0, array.length - 1), aug);
  arr.push(newArr);
  return arr;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) { return []; }

  var arr = minimizeZeroes(array.slice(0, array.length - 1));
  if (arr[arr.length - 1] === 0 && array[array.length - 1] !== 0) {
    arr.push(array[array.length - 1]);
  } else if (arr[arr.length - 1] !== 0) {
    arr.push(array[array.length - 1]);
  }
  return arr;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) { return []; }
  array[0] = Math.abs(array[0]);

  var arr = alternateSign(array.slice(0, array.length - 1));
  if ((arr[arr.length - 1] < 0 && array[array.length - 1] < 0) || (arr[arr.length - 1] > 0 && array[array.length - 1] > 0)) {
    arr.push(-array[array.length - 1])
  } else {
    arr.push(array[array.length - 1]);
  }
  return arr;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numDict = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
}
var numToText = function(str) {
  if (str.length === 0) { return ''; }

  if (str[0] in numDict) {
    return numDict[str[0]] + numToText(str.slice(1));
  } else {
    return str[0] + numToText(str.slice(1));
  }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  node = node || document.body;
  var count = 0;
  if (node.tagName && node.tagName.toLowerCase() === tag) {
    count++;
  }
  if (node.hasChildNodes()) {
    for (var i = 0; i < node.childNodes.length; i++) {
      count += (tagCount(tag, node.childNodes[i]))
    }
  }

  return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
