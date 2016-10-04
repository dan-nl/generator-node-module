'use strict';

/**
 * @type {string}
 */
var intro = [
  '',
  'this generator will run the following tasks:',
  '',
  '  * npm init',
  '  * create license.txt',
  '  * create readme.md',
  '  * install tap and optionally sinon',
  '  * install coveralls',
  '  * install eslint-config',
  '  * create .travis.yml',
  '',
  'you can skip any of these tasks when prompted below',
  ''
].join( '\n' );

module.exports = intro;
