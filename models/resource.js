const jsonfile = require('jsonfile');

const get = function (callback) {
	jsonfile.readFile('./models/resource.json', callback);
}

module.exports.get = get;