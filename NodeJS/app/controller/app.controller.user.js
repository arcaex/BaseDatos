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

exports.delUser = function (request, response) {
	console.log(request.body);
	const body = request.body;
	User.deleteUser(body.id_user, function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};
