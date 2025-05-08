// Print all elements
function printArray(arr) {
    arr.forEach(element => console.log(element));
}

// Print all elements in reverse
function printArrayReverse(arr) {
    arr.slice().reverse().forEach(element => console.log(element));
}

// Function to check if a value exists in an array
function valueExists(arr, value) {
    return arr.includes(value);
}

// Count occurrences of a value
function countOccurrences(arr, value) {
    return arr.filter(element => element === value).length;
}

// Print elements divisible by their index
function printElementsDivisibleByIndex(arr) {
    arr.forEach((element, index) => {
        if (index !== 0 && element % index === 0) {
            console.log(element);
        }
    });
}

// Example of using map: square each number
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// Example of using reduce: sum all elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// Combining map and reduce: sum of squares
const sumOfSquares = numbers.map(n => n * n).reduce((acc, curr) => acc + curr, 0);
console.log("Sum of squares:", sumOfSquares); // 55
