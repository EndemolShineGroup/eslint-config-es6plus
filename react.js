module.exports = {
  'extends' : ['eslint:recommended', 'plugin:react/recommended', 'eslint-config-es6plus'],

  'parserOptions' : {
    'ecmaFeatures' : {
      'jsx'           : true,
    },
  },

  'plugins' : [
    'import',
    'react',
  ],

  'rules' : {

    /**
     * Imports
     */

     'import/extensions'          : [1, { "js": "never", "jsx": "never" }],

    /**
     * React
     */
    'react/display-name'                 : 1,
    'react/forbid-prop-types'            : [2, { 'forbid' : ['any'] }],
    'react/jsx-boolean-value'            : 1,
    'react/jsx-closing-bracket-location' : [1, 'tag-aligned'],
    'react/jsx-curly-spacing'            : 1,
    'react/jsx-indent'                   : [1, 2],
    'react/jsx-indent-props'             : [1, 2],
    'react/jsx-key'                      : 1,
    'react/jsx-max-props-per-line'       : 0,
    'react/jsx-no-bind'                  : [1, { 'allowArrowFunctions': true }],
    'react/jsx-no-literals'              : 0,
    'react/jsx-pascal-case'              : 1,
    'react/jsx-space-before-closing'     : 1,
    'react/sort-prop-types'              : [1, {
      "callbacksLast": true,
      "requiredFirst": true,
    }],
    'react/jsx-sort-props'               : [1, {
      "callbacksLast": true,
      "shorthandFirst": true,
    }],
    'react/jsx-wrap-multilines'          : 2,
    'react/no-multi-comp'                : 1,
    'react/no-set-state'                 : 0,
    'react/prefer-es6-class'             : 1,
    'react/self-closing-comp'            : 1,
    'react/sort-comp'                    : 1,
  },
};
