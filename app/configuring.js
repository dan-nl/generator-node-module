'use strict';

/**
 * module dependencies
 */
var yosay = require( 'yosay' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;
var prompts = require( './helpers/prompt-continue' );

/**
 * @this Base
 * @returns {undefined}
 */
function configuring() {
  var generator = this;

  if ( !this.options.PromptAnswers.get( 'create-node-module' ) ) {
    return;
  }

  this.log(
    yosay(
      'thanks, now i’ve got enough info to configure the node module, ' +
      'copy files & templates, and install any required npm packages'
    )
  );

  return promptingHelper( this, prompts )
    .then(
      function () {
        if ( !generator.options.PromptAnswers.get( 'create-node-module-continue' ) ) {
          process.exit( 0 );
        }
      }
    );
}

module.exports = configuring;
