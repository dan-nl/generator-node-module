/* eslint no-invalid-this: off, consistent-this: off, no-process-exit: off */

'use strict';

/**
 * module dependencies
 */
var displayGeneratorIntro = require( 'yeoman-helpers' ).displayGeneratorIntro;
var generator_ascii_art = require( './helpers/ascii-art' );
var generator_intro_text = require( './helpers/intro-text' );
var getGeneratorPrompts = require( './helpers/get-generator-prompts' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @returns {undefined}
 */
function prompting() {
  var generator = this;

  displayGeneratorIntro(
    this,
    {
      ascii_art: {
        art: generator_ascii_art,
        display: this.options.asciiArt
      },
      intro_text: generator_intro_text
    }
  );

  /**
   * @property {Function} then
   */
  return promptingHelper( this, getGeneratorPrompts() )
    .then(
      function () {
        if ( !generator.options.PromptAnswers.get( 'continue-node-module-tasks' ) ) {
          process.exit( 0 );
        }
      }
    );
}

module.exports = prompting;
