module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	rules: {
		// only apply parens to arrow functions when there are multiple args
		'arrow-parens': [2, 'as-needed'],

		// never have trailing commas
		'comma-dangle': [2, 'never'],

		// allow require in all sorts of places
		'global-require': 0,

		// always indent with one tab, including switch statements
		'indent': [1, 'tab', { SwitchCase: 1 }],

		// don't worry about line endings
		'linebreak-style': 0,

		// warn for any line over 140 chars
		'max-len': [1, 140],

		// class constructors must start with a capital letter, allows Router and Object ID without 'new'
		'new-cap': [2, { capIsNewExceptions: ['Router', 'ObjectId'] }],

		// don't allow modification of any input parameters
		'no-param-reassign': [2, { props: false }],

		// allow the ++ operator
		'no-plusplus': 0,

		// disallow underscore dangle with the exceptions '_id' & '__v'
		'no-underscore-dangle': [2, { allow: ['_id', '__v'] }],

		// allow tabs!
		'no-tabs': 0,

		// allow objects to be defined on a single line
		'object-curly-newline': 0,

		// use object shorthand wherever possible
		'object-shorthand': ['error', 'always'],

		// allow indentation regardless of blank lines above and below
		'padded-blocks': 0,

		// ensure properties are either consistently in / without qutoes as needed
		'quote-props': [2, 'consistent-as-needed']
	}
};