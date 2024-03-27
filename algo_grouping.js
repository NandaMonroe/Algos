/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {

    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;

    var newObj = { quarter: 0, dime: 0, nickel: 0, penny: 0 };

    while ( cents > 0 ) {

        if (cents >= quarter ) {
            newObj['quarter']++
            cents -= quarter
        }
        else if (cents >= dime) {
            newObj['dime']++
            cents -= dime
        }
        else if (cents >= nickel) {
            newObj['nickel']++
            cents -= nickel
        }
        else if (cents >= penny) {
            newObj['penny']++
            cents -= penny
        }
    }
    
    return newObj 

}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));

/*****************************************************************************/

/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
*/

const nums1 = [1, 1, 1, 1];
const expected11 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected22 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected33 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected44 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {

    indexes = []
    temp = []

    for(var i = 0; i < 10; i++){
        nums.forEach((element, index) => {
            if (element === i) {
            indexes.push(index);
            }
        })
    if (indexes.length > 0){
        temp.push(i)
    }
    indexes = []
    }

    return temp

}

console.log(dedupeSorted(nums1) + " should be " + expected1)
console.log(dedupeSorted(nums2) + " should be " + expected2)
console.log(dedupeSorted(nums3) + " should be " + expected3)
console.log(dedupeSorted(nums4) + " should be " + expected4)

/*****************************************************************************/