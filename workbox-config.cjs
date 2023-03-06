module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{vue,svg,ts,js,css}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};