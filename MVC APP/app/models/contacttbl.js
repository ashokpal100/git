var mongoose = require('mongoose');

module.exports = mongoose.model('mvc', {
	name : String,
	email : String,
	number : String
});