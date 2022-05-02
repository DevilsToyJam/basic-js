const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexOne = [];
  arr.forEach((x, i) => x === -1 ? indexOne.push(i) : null)
  let sortedArr = arr.filter(x => x !== -1).sort((a, b) => a - b);
  for (let i = 0; i < indexOne.length; i++) {
    let prt1 = sortedArr.slice(0, indexOne[i])
    let prt2 = sortedArr.slice(indexOne[i])
    prt1.push(-1)
    sortedArr = [...prt1, ...prt2]
  }
  return sortedArr
}

module.exports = {
  sortByHeight
};
