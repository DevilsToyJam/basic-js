const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('');
  for (let i = email.length; i > 0; i--) {
    if (email[i] === '@') {
      return email.slice(i + 1, email.length).join('');
    }
  }
};

module.exports = {
  getEmailDomain
};
