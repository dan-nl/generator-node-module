'use strict';

/**
 * module dependencies
 */
var initializingHelper = require( 'yeoman-helpers' ).initializingHelper;

function initializing() {
  initializingHelper( this );

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

  this.composeWith(
    'license',
    { options: { prompts: this.options.prompts } },
    { local: require.resolve( 'generator-license' ) }
  );

  this.composeWith(
    'readme',
    { options: { prompts: this.options.prompts } },
    { local: require.resolve( 'generator-readme' ) }
  );

  this.composeWith(
    'package-json',
    { options: { prompts: this.options.prompts } },
    { local: require.resolve( 'generator-package-json' ) }
  );
}

module.exports = initializing;
