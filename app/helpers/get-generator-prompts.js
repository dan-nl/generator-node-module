'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      default: true,
      message: 'continue with these tasks?',
      name: 'continue-node-module-tasks',
      type: 'confirm'
    }
  ];
}

module.exports = getGeneratorPrompts;
