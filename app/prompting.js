/* eslint no-invalid-this: off, consistent-this: off, no-process-exit: off */

'use strict';

/**
 * module dependencies
 */
var displayGeneratorIntro = require( 'yeoman-helpers' ).displayGeneratorIntro;
var generator_ascii_art = require( './helpers/ascii-art' );
var generator_intro_text = require( './helpers/intro-text' );
var prompts = require( './helpers/prompt-create-node-module' );
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
  return promptingHelper( this, prompts )
    .then(
      function () {
        if ( !generator.options.PromptAnswers.get( 'create-node-module' ) ) {
          process.exit( 0 );
        }
      }
    );
}

module.exports = prompting;
