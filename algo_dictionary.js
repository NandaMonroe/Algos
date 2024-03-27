/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  const keys2 = [];
  const vals2 = [];
  const expected2 = {};

  const keys3 = ["Yup", 55, "Infinity", "Nope", "Soup", "Rats", "Rat Soup"]
  const vals3 = ["Uhhuh", true, "Cars", "Starvin", "Marvin", "14", "Hello"]
  const expected3 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };
  
  //BONUS: Allow the arrays to be of different lengths!


  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  
  function zipArraysIntoMap(keys, values) {
    var dict = {}
    for (var i = 0; i < keys.length; i++) {
        dict[keys[i]] = values[i]
    }
    return dict
  }
  
  console.log(zipArraysIntoMap(keys1, vals1));

  /*****************************************************************************/


  function zipArraysIntoMap(keys, values) {
    
    // The 'reduce' method is called on the 'keys' array.
    // It takes a callback function and an initial value (empty object {}) as its arguments.
    return keys.reduce((acc, key, idx) => {
        
        // Inside the callback:
        // 'acc' is the accumulator object that will eventually hold the final key-value pairs.
        // 'key' is the current key being processed in the 'keys' array.
        // 'idx' is the current index of the 'key' in the 'keys' array.

        // Check if the current index 'idx' is within the bounds of the 'values' array.
        // This ensures that we don't try to access an undefined value if the 'keys' array is longer than the 'values' array.
        if (idx < values.length) {

            // If the condition is true, add a new key-value pair to the 'acc' object.
            // The key is the current 'key' from the 'keys' array, and the value is the corresponding value from the 'values' array.
            acc[key] = values[idx];
        }

        // The 'acc' object is returned after processing each key. 
        // This allows 'reduce' to pass the updated 'acc' to the next iteration.
        return acc;

    // The initial value for the 'acc' object is an empty object ({}).
    }, {}); 
}

//Testing
console.log(zipArraysIntoMap(keys1, vals1));  // Expected output: { abc: 42, 3: 'wassup', yo: true }
console.log(zipArraysIntoMap(keys2, vals2));  // Expected output: {}
console.log(zipArraysIntoMap(keys3, vals3));  // Expected output with the provided test cases