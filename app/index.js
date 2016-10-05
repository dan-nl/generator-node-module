'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );
generator.prompting = require( './prompting' );
generator.configuring = require( './configuring' );
generator.end = require( './end' );

module.exports = generators.Base.extend( generator );
