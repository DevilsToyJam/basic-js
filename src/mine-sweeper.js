const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const moves = [[-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [0, -1],
  [1, 1],
  [1, -1],
  [1, 0]];
  let ans = [];
  const checkFunc = (i1, i2) => {
    let count = 0;
    for (let i = 0; i < moves.length; i++) {
      const moveInd1 = moves[i][0];
      const moveInd2 = moves[i][1];
      if (!!matrix[i1 - moveInd1] === true && matrix[i1 - moveInd1][i2 - moveInd2]) {
        count += 1;
      }
    }
    return count;
  }
  for (let i = 0; i < matrix.length; i++) {
    ans.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      ans[i][j] = checkFunc(i, j);
    }
  }
  return ans;
};

module.exports = {
  minesweeper
};
