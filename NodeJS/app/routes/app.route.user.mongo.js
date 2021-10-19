module.exports = function (app) {
	const router = require('../controller/app.controller.user.mongo');
	app.route('/userMongo')
		.get(router.getUsers)
		.delete(router.delUser)
		.post(router.addUser)
		.put(router.modifyUser)
};