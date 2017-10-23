const resource = require('../models/resource');

module.exports.get = function (req, res) {
	resource.get(function(err, data) {
		if (err) {

		}
		res.render('home', {resource: data});
	})
}