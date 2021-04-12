/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const word = String(n);
  const arr = word.split('');
  const arrSort = arr.sort().reverse();
  arrSort.pop();
  const res = arrSort.join('') / 1;
  return res;
}

module.exports = deleteDigit;
