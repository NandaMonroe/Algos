/* 
  Longest Palindrome

  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 

  Strings longer or shorter than complete words are OK.

  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/


const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

function isPalindrome(str) {
    var reverseStr = ""
    for (var i = str.length-1; i >= 0; i--) {
        reverseStr += str[i]
    }
    if (reverseStr === str) {
      return true
    }
    else {
      return false
    }
  }

function longestPalindromicSubstring(str) {
var longestPalin = str[0]
    for (var i = 0; i < str.length; i++) {
        for (var j = i+1; j < str.length; j++) {
            if (str[i] == str[j]) {
                var subStr = str.slice(i,j+1)
                
                if (isPalindrome(subStr) && subStr.length > longestPalin.length) {
                    longestPalin = subStr
                }
            }
        }
    }
    return longestPalin
}
console.log(longestPalindromicSubstring(str1))
console.log(longestPalindromicSubstring(str2))
console.log(longestPalindromicSubstring(str3))
console.log(longestPalindromicSubstring(str4))



/*****************************************************************************/
