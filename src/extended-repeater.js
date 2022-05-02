const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

function repeater(str, options) {
  let newStr = '';
  let strRepeat = options['repeatTimes'] ? options['repeatTimes'] : 1;
  let addRepeat = options['additionRepeatTimes'] ? options['additionRepeatTimes'] : 1;
  let separatorStr = options['separator'] ? options['separator'] : '+';
  let separatorAdition = options['additionSeparator'] ? options['additionSeparator'] : '|';
  for (let i = 0; i < strRepeat; i++) {
    newStr += str;
    for (let j = 0; j < addRepeat; j++) {
      if (!options.hasOwnProperty('addition')) {
        break;
      }
      if (j === addRepeat - 1) {
        newStr += options['addition'];
        break;
      }
      newStr += options['addition'] + separatorAdition;
    }
    if (i === strRepeat - 1) {
      break;
    }
    newStr += separatorStr;
  }
  return newStr;
};

module.exports = {
  repeater
};
