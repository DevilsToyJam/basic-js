const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copyArr = [...arr];
  const controlSeq = ['--discard-prev', '--discard-next', '--double-next', '--double-prev'];
  const controlFunc = (x, arr, i) => {
    if (x === '--discard-prev') {
      if (controlSeq.includes(arr[i - 1])) {
        return;
      }
      if (i - 1 < 0) {
        return;
      };
      arr.splice(i - 1, 1)
      return arr;
    }
    if (x === '--discard-next') {
      if (i + 1 >= arr.length) {
        return;
      }
      if (controlSeq.includes(arr[i + 1])) {
        return;
      }
      arr.splice(i + 1, 1);
      return arr;
    }

    if (x === '--double-next') {
      if (i + 1 >= arr.length) return;
      if (controlSeq.includes(arr[i + 1])) {
        return;
      }
      let part1 = arr.slice(0, i);
      let part2 = arr.slice(i + 1);
      part1.push(arr[i + 1]);
      copyArr = [...part1, ...part2];
      return arr;
    }

    if (x === '--double-prev') {
      if (i - 1 < 0) {
        return;
      }
      if (controlSeq.includes(arr[i - 1])) {
        return;
      }
      let part1 = arr.slice(0, i);
      let part2 = arr.slice(i + 1);
      part1.push(arr[i - 1]);
      copyArr = [...part1, ...part2];
      return arr;
    }
  };

  for (let i = 0; i < arr.length; i++) {
    if (controlSeq.includes(arr[i])) {
      controlFunc(arr[i], copyArr, i);
    }
  }
  return copyArr.filter(x => !controlSeq.includes(x));
};

module.exports = {
  transform
};
