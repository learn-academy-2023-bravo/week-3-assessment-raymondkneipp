// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe('fib', () => {
  it('should return array with fib numbers of given length', () => {
    expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })

  it('should return error', () => {
    expect(fib(0)).toEqual("numOfTerms must be greater than 2")
    expect(fib(1)).toEqual("numOfTerms must be greater than 2")
    expect(fib(2)).toEqual("numOfTerms must be greater than 2")
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Create a function called fib
// input: integer for number of terms
// if input is less than or equal to 2 then return error
// create a variable to hold first number ei 1
// create a variable to hold second number ei 1
// declare a variable to hole the next term
// create an array to hold the result
// use a for loop that starts at 1, runs until the number of iterations is equal to the input, add one to iterator
// push the first number to result
// assign next term to the first num plus the second num
// set the first number to the second number
// set the second number to the first number plus the second number
// return the result array after completion of iterations

const fib = (numOfTerms) => {
  if (numOfTerms <= 2) {
    return "numOfTerms must be greater than 2"
  }

  let n1 = 1, n2 = 1, nextTerm
  let result = []

  for (let i = 1; i <= numOfTerms; i++) {
    result.push(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }

  return result
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe('sortObject', () => {
  it('should return array of values sorted from least to greatest', () => {
    expect(sortObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

// create a function
// input: object
// use objects.values to get all values from object, returns array
// use the sort method on array to sort values from least to greatest

const sortObject = (obj) => {
  return Object.values(obj).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe('accumulatingSum', () => {
  it('should return an array of the accumulating sum', () => {
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// create a function that takes in an array of numbers
const accumulatingSum = (arr) => {
  // create an empty array called result to store the accumulating sum
  let result = []

  // reduce the given array
  arr.reduce((accumulator, currentValue, index) => {
    // set the result array index of the current iteration to the accumulator plus the current value
    return result[index] = accumulator + currentValue
  }, 0) // set initial currentValue to zero

  // return result
  return result
}
