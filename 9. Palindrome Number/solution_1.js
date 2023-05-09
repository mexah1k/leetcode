/// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 * TC: O(n)
 * SC: O(n)
 */

// Solution: reverse number using string
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }

  const reversedNumber = `${x}`.split("").reverse().join("");

  return x === Number(reversedNumber);
}

console.log(isPalindrome(121));
console.log("**********");
console.log(isPalindrome(1221));
console.log("**********");
console.log(isPalindrome(-121));
