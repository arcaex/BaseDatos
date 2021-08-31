'use strict';
const User = require('../model/app.model.user.js');

exports.getUsers = function (request, response) {
	User.getlistUsers(function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};
