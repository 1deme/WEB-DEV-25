// მასივი ყველა ელემენტის ბეჭდვის ფუნქცია

// მასივის ყველა ელემენტის უკუღმა ბეჭდვის ფუნქცია

// ფუნქცია, რომელიც ამოწმებს, არსებობს თუ არა მნიშვნელობა მასივში (იღებს მასივს და რიცხვს არგუმენტებად)

// ფუნქცია, რომელიც ითვლის რამდენჯერ შედის მნიშვნელობა მასივში

// ფუნქცია, რომელიც ბეჭდავს ელემენტებს, რომლებიც იყოფა მათი ინდექსზე ნაშთის გარეშე

// Function to print all numbers of an array
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// Function to print all numbers of an array in reverse
function printArrayReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// Function to check if a value exists in an array
function valueExists(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

// Function to count the number of occurrences of a value in an array
function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

// Function to print elements divisible by their index
function printElementsDivisibleByIndex(arr) {
    for (let i = 1; i < arr.length; i++) { // Start from 1 to avoid division by 0
        if (arr[i] % i === 0) {
            console.log(arr[i]);
        }
    }
}

// Example usage:
const exampleArray = [0, 3, 6, 9, 12, 15];

console.log("Print all elements:");
printArray(exampleArray);

console.log("Print all elements in reverse:");
printArrayReverse(exampleArray);

console.log("Check if 9 exists:");
console.log(valueExists(exampleArray, 9)); // true

console.log("Count how many times 3 appears:");
console.log(countOccurrences(exampleArray, 3)); // 1

console.log("Print elements divisible by their index:");
printElementsDivisibleByIndex(exampleArray);
