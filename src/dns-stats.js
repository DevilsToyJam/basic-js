const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  domains.forEach(subD => {
    subD = subD.split('');
    let secToP = '';
    for (let i = subD.length - 1, j = 0; i >= 0; i--, j++) {
      if (subD[i] === '.') {
        secToP += subD.slice(i, subD.length).join('');
        answer[secToP] = answer[secToP] + 1 || 1;
        subD.splice(i, j + 1);
        j = -1;
      } else if (i === 0) {
        secToP += '.' + subD.slice(i, subD.length).join('');
        answer[secToP] = answer[secToP] + 1 || 1;
        subD.splice(i, j + 1);
        j = -1;
      }
    }
  });
  return answer;
};

module.exports = {
  getDNSStats
};
