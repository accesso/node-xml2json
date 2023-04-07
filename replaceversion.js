const replace = require('replace-in-file');

const path = './package.json';
const newVersion = process.env.npm_package_version;
const packageVersionString = '"version": "' + newVersion + '",';

try {
	const results = replace.sync({
		files: path,
		from: /"version":\s?"[^"]*",/,
		to: packageVersionString,
	});
	console.log('Replacement results:', results);
}
catch (error) {
	console.error('Error occurred:', error);
}