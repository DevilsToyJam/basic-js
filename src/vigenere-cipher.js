const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(dir = '') {
    this.dir;
    if (dir === '') {
      this.dir = true;
    } else {
      this.dir = false;
    }
  };

  encrypt(string, keyWord) {
    if (!string || !keyWord) throw new Error('Incorrect arguments!');
    let encrStr = '';
    let upperKeyWord = keyWord.toUpperCase();
    while (upperKeyWord.length < string.length) {
      upperKeyWord += keyWord.toUpperCase();
    }
    for (let i = 0, j = 0; i < string.length; i++) {
      if (!string[i].match(/[a-z]/i)) {
        encrStr += string[i];
      }
      else {
        encrStr += String.fromCharCode(((string[i].toUpperCase().charCodeAt(0) + upperKeyWord[j++].charCodeAt(0)) % 26) + 65);
      }
    }
    if (this.dir) {
      return encrStr;
    } else {
      return encrStr.split('').reverse().join('');
    }
  };
  decrypt(string, keyWord) {
    if (!string || !keyWord) throw new Error('Incorrect arguments!');
    let encrStr = '';
    let upperKeyWord = keyWord.toUpperCase();
    while (upperKeyWord.length < string.length) {
      upperKeyWord += keyWord.toUpperCase();
    }
    for (let i = 0, j = 0; i < string.length; i++) {
      if (!string[i].match(/[a-z]/i)) {
        encrStr += string[i];
      }
      else {
        encrStr += String.fromCharCode(((string[i].toUpperCase().charCodeAt(0) - upperKeyWord[j++].charCodeAt(0) + 26) % 26) + 65);
      }
    }
    if (this.dir) {
      return encrStr;
    } else {
      return encrStr.split('').reverse().join('');
    }
  };
};

module.exports = {
  VigenereCipheringMachine
};
