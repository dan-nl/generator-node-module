/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var PromptAnswers = require( 'yeoman-prompting-helpers' ).PromptAnswers;

/**
 * @returns {undefined}
 */
function initializing() {
  this.options.PromptAnswers = this.options.PromptAnswers || new PromptAnswers();

  this.composeWith(
    'npm-init',
    {},
    { local: require.resolve( 'generator-npm-init' ) }
  );

  this.composeWith(
    'license',
    { options: { PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-license' ) }
  );

  this.composeWith(
    'readme',
    { options: { PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-readme' ) }
  );

  this.composeWith(
    'tap',
    { options: { PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-tap' ) }
  );

  this.composeWith(
    'coveralls',
    { options: { PromptAnswers: this.options.PromptAnswers } },
    { local: require.resolve( 'generator-coveralls' ) }
  );

  this.composeWith(
    'eslint-config',
    {},
    { local: require.resolve( 'generator-eslint-config' ) }
  );

  this.composeWith(
    'travis',
    {},
    { local: require.resolve( 'generator-travis' ) }
  );
}

module.exports = initializing;
