// 1-  
// let num = prompt("Enter a number:");
// function number(num) {
//     let leftMostDigit=num[0];
//     return leftMostDigit;
// }
// console.log(number(num));  


// -----------------------------------------------------------

// 2-
// function countNumbers(arr) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     let evenCount = 0;
//     let oddCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (num > 0) {
//             positiveCount++;
//         } else if (num < 0) {
//             negativeCount++;
//         }
//         if (num % 2 === 0) {
//             evenCount++;
//         } else if (num % 2 !== 0) {
//             oddCount++;
//         }
//     }
//     return {
//         positiveCount,
//         negativeCount,
//         evenCount,
//         oddCount
//     };
// }

// let numbers = [5, 7, -2, 0, 4, -8, -3, 6];
// let result = countNumbers(numbers);

// console.log(`Positive numbers: ${result.positiveCount}`);
// console.log(`Negative numbers: ${result.negativeCount}`);
// console.log(`Even numbers: ${result.evenCount}`);
// console.log(`Odd numbers: ${result.oddCount}`);
// -----------------------------------------------------------
// 3-
// function filterIntegers(arr) {
//     let integers = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (typeof num === 'number') {
//             integers.push(num);
//         }
//     }
//     return integers;
// }

// let mixed = [1, 'moaz', 42, 'elhenawy', -8];
// let integers = filterIntegers(mixed);

// console.log(integers); 

// -----------------------------------------------------------
// 4-
// function Slice(array, start = 0, end = array.length) {
//     let result = [];
//     let len = array.length;

//     start = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
//     end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

//     for (let i = start; i < end; i++) {
//         result.push(array[i]);
//     }

//     return result;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(Slice(array, 1, 3));  
// console.log(Slice(array, -3, -1)); 
// console.log(Slice(array, 2));      
// console.log(Slice(array));         

// -----------------------------------------------------------
// 5-
// function getLargestNumbers(arrays) {
//     let largestNumbers = [];
//     for (let i = 0; i < arrays.length; i++) {
//         let subArray = arrays[i];
//         let maxNumber = subArray[0]; 

//         for (let j = 1; j < subArray.length; j++) {
//             if (subArray[j] > maxNumber) {
//                 maxNumber = subArray[j];
//             }
//         }

//         largestNumbers.push(maxNumber);
//     }

//     return largestNumbers;
// }

// let arrayOfArrays = [
//     [1, 2, 3, 4],[45, 73, 12], [13, 13, 10]
// ];

// let largestNumbers = getLargestNumbers(arrayOfArrays);
// console.log(largestNumbers); 

// -----------------------------------------------------------
// 6-
// function string(s) {
//     if (s.length > 10) {
//         let abbreviation = s[0] + (s.length - 2) + s[s.length - 1];
//         console.log(abbreviation);
//     } else {
//         console.log(s);
//     }
// }

// string("internationalization"); 
// string("hello");

// -----------------------------------------------------------
// 7-
// function hasTwo(s) {
//     if (s.length !== 4) {
//         return false;
//     }

//     let charCount = {};

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     let values = Object.values(charCount);

//     for (let i = 0; i < values.length; i++) {
//         if (values[i] === 2) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }
// console.log(hasTwo("ASSA")); 
// console.log(hasTwo("STTO")); 

// -----------------------------------------------------------
// 8-
// function checkWinner(board) {
//     let lines = [
//         // Rows
//         [board[0][0], board[0][1], board[0][2]],
//         [board[1][0], board[1][1], board[1][2]],
//         [board[2][0], board[2][1], board[2][2]],
        
//         // Columns
//         [board[0][0], board[1][0], board[2][0]],
//         [board[0][1], board[1][1], board[2][1]],
//         [board[0][2], board[1][2], board[2][2]],
        
//         // Diagonals
//         [board[0][0], board[1][1], board[2][2]],
//         [board[0][2], board[1][1], board[2][0]]
//     ];
    
//     for (let line of lines) {
//         if (line[0] === line[1] && line[1] === line[2] && line[0] !== '') {
//             return line[0];
//         }
//     }
    
//     return "No winner";
// }

// let board = [
//     ['X', 'O', 'X'],
//     ['X', 'O', 'O'],
//     ['X', 'X', 'O']
// ];

// console.log(`The Winner Is : ${checkWinner(board)}`); 

// -----------------------------------------------------------
// 9-
// function findIndixes(arr, char) {
//     let firstIndex = -1;
//     let lastIndex = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === char) {
//             if (firstIndex === -1) {
//                 firstIndex = i;
//             }
//             lastIndex = i;
//         }
//     }
//     return [firstIndex, lastIndex];
// }

// let array = ['a', 'b', 'c', 'a', 'd', 'a', 'e'];
// let character = 'a';

// let result = findIndixes(array, character);

// console.log(result); 

// -----------------------------------------------------------
// 10-
// function sum(arr, target) {
//     for (let start = 0; start < arr.length; start++) {
//         let sum = 0;
//         for (let end = start; end < arr.length; end++) {
//             sum += arr[end];
//             if (sum === target) {
//                 return true;
//             }
//             if (sum > target) {
//                 break;
//             }
//         }
//     }
//     return false;
// }

// let array = [2, 4, 7, 1, 3, 5];
// let targetNumber = 8;

// let result = sum(array, targetNumber);

// console.log(result); 
