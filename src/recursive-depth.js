const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let newArr = [...arr];
    let checker = (arr) => arr.some(el => Array.isArray(el))

    if (checker(newArr)) {
      count += 1
      newArr = newArr.flat(1)
      return this.calculateDepth(newArr, count)
    } 
      return count
  }
}

module.exports = {
  DepthCalculator
};
