/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:

function consecutiveSums(array, k) {

    // create empty array to push results
    const result = []
    // iterating through the array (i)
    for (let i = 0; i<array.length; i++) {
        const newArr = []
        let sum = 0
        for (let j = i; j<array.length; j++) {
            sum += array[j]
            if (sum > k) {
                break
            }
            newArr.push(array[j])
            if (sum == k) {
                result.push([...newArr])
            }
        }
    }

    return result
    // nested loop to iterate through the array (j)
    // sum the index of i to index of j and check if it is equal to k
    // if it is less than k, push the values of index to new array, and j keep iterating until the sum is equal to k
    // if the sum is greater than k, break the loop, and increment i
    
}

console.log(consecutiveSums(arr, k))