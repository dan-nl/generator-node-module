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
  ''
].join( '\n' );

module.exports = intro;
