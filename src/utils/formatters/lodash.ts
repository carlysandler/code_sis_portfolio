import _ from 'lodash'
interface TextFunctions {
	[key: string]: Function;
}

const textFunctions: TextFunctions = {
	camelCase: _.camelCase,
	capitalize: _.capitalize,
	deburr: _.deburr,
	endsWith: _.endsWith,
	escape: _.escape,
	escapeRegExp: _.escapeRegExp,
	kebabCase: _.kebabCase,
	lowerCase: _.lowerCase,
	lowerFirst: _.lowerFirst,
	pad: _.pad,
	padEnd: _.padEnd,
	padStart: _.padStart,
	parseInt: _.parseInt,
	repeat: _.repeat,
	replace: _.replace,
	snakeCase: _.snakeCase,
	split: _.split,
	startCase: _.startCase,
	startsWith: _.startsWith,
	template: _.template,
	toLower: _.toLower,
	toUpper: _.toUpper,
	trim: _.trim,
	trimEnd: _.trimEnd,
	trimStart: _.trimStart,
	truncate: _.truncate,
	unescape: _.unescape,
	upperCase: _.upperCase,
	upperFirst: _.upperFirst,
	words: _.words
};

export default textFunctions;