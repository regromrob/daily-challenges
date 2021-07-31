// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



// Parameters: Array of numbers (positive only, no gotchas) 
// Returns: The sum of the squares of each number provided in the array.
// Examples:
// [1, 2, 2] = 9 1^1 = 1, 2^2 = 4, 2^2 = 4, so total sums of squares is 9
// ([1,2,2,1]), 10)
// ([1,2,3]), 14)
// Pseudocode:
// First, create the function line: function sumSquares(arr) 
// Next, setup console.log tests
// We want to return the sum of the squares, and will need to keep track of the sum as we loop through the array. 
// We’ll use the reduce() method, with two key values.  A for accumulator, and C for current value.
// We’ll use an arrow function within a function….. ?
// (Accumulator) + (Current Value * Current Value)
// 0 is placed to catch any errors from a possible empty array, assuring that the output will be 0 and not “undefined”.

function squareSum(numbers){
    return numbers.reduce((a,c)=>a + c**2,0)
    }