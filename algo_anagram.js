/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if (s1.length != s2.length) {
    return false;
  }

  s1_dict = {};
  s2_dict = {};

  for (var i = 0; i <= s1.length; i++) {
    if (!s1_dict[s1[i]]) {
      s1_dict[s1[i]] = 1;
    } else {
      s1_dict[s1[i]] += 1;
    }
    if (!s2_dict[s2[i]]) {
      s2_dict[s2[i]] = 1;
    } else {
      s2_dict[s2[i]] += 1;
    }
  }

  for (const key in s1_dict) {
    if (s1_dict[key] != s2_dict[key]) {
      return false;
    }
  }
  return true;
}

/*****************************************************************************/

function isAnagram(s1, s2) {

    s1 = s1.replace().toLowerCase();
    s2 = s2.replace().toLowerCase();
    var arr1 = s1.split('');
    var arr2 = s2.split('');

    for( var i= 0; i<s1.length; i++){

        arr1.sort();
        arr2.sort();

        if (arr1.join('') === arr2.join('')) {
        return true;
        } else 
        return false;     
    }

}

/*****************************************************************************/

function isAnagram(s1, s2) {
    return (s1.toLowerCase().split('').sort().join('') == s2.toLowerCase().split('').sort().join('')) ? true : false
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))
