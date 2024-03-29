var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;

/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */

function inclusiveRangeSum(rangeA1, rangeB1) {

    var sum = 0;
    for (var i = rangeA1; i <= rangeB1; i++) {
        sum += i;
    }
    return sum;
}

console.log(inclusiveRangeSum(rangeA1, rangeB1))