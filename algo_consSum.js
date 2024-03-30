/* https://leetcode.com/problems/two-sum/

    Given an array of integers, return indices of the
    two numbers such that they add up to a specific target.

    You may assume that each input would have EXACTLY ONE SOLUTION,
    and you may not use the same element twice.

    the array is unsorted, contains no floats, and there may be duplicate values

    Given arr = [2, 11, 7, 15], target = 9,
    Because arr[0] + arr[2] = 2 + 7 = 9
    return [0, 2].
    
    */
// example 1
const given1= [2, 11, 7, 15]
const target1= 9
output: [0,2]

// example 2
const given2= [3,2,4]
const target2= 6
output: [1,2]

// example 3
const given3= [3,3]
const target3= 6
output: [0,1]


// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first
// create the function and decide what params it needs and what it will return here:

// const indexSum = (arr, target) => {

//     for (let i = 0; i< arr.length; i++) {
        
//         for (let j = i+1; j < arr.length; j++) {
            
//             const result = []

//             if( (arr[i] + arr[j]) == target ) {
//                 result.push(i, j)
//                 return result
//             }

//         }
//     }
// }

// const indexSum = (arr, target) => {

//     for (let i = 0; i < arr.length; i++) {

//         let j = i+1

//         while( j < arr.length ) {
            
//             const result = []

//             if( (arr[i] + arr[j]) == target ) {
//                 result.push(i, j)
//                 return result
//             }
//             j++
//         }
//     }
// }

const indexSum = (arr, target) => {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        let j = (target - arr[i])
        if (arr.includes(j)) {
            return arr.findIndex(j)
        }
    }
}





console.log(indexSum(given1, target1));






// function twoSum(arr, target){
//     len=arr.length

//     for (let i = 0; i < len; i++) {
//         let j = arr.findIndex(item=>item+arr[i] ==target);
//         if(j != -1) { return [i, j]
//         }
//     }
// }


console.log(indexSum(given2, target2));
console.log(indexSum(given3, target3));