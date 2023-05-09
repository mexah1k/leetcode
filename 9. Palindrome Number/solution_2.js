/// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 * TC: O(n)
 * SC: O(1)
 */

// Solution: reverse number using MATH
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  let reverse = 0;
  let temp = x;
  while (temp > 0) {
    reverse = reverse * 10 + (temp % 10);
    console.log(reverse);

    temp = Math.floor(temp / 10);

    console.log(temp);
  }
  return reverse === x;
}

console.log(isPalindrome(121));
console.log("**********");
console.log(isPalindrome(1221));
console.log("**********");
console.log(isPalindrome(-121));
