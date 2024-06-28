//  Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(num1, num2) {
    return num1 + num2 ;
}
console.log(calculateSum(10, 20));
// Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(10));//true
console.log(isEven(11));//false
//Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array. 
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello world"));
// Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//  Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr) {
    let sorted = arr.sort();
    return sorted;
}
console.log(sortArray([1,7,6,5,4,3,9,2,8]));
//  Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
console.log(capitalizeFirstLetter("myzulislamomi"));