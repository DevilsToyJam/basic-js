const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arr = [];
  for (let i = 0, j = 1; i < str.length; i++, j++) {
    if (str[i] !== str[i + 1]) {
      arr.push(j, str[i]);
      j = - 0;
    }
  }
  return arr.filter(item => item !== 1).join('');
};


module.exports = {
  encodeLine
};
