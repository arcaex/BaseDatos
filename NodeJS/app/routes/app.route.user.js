module.exports = function (app) {
	const router = require('../controller/app.controller.user');
	app.route('/user')
		.get(router.getUsers)
		.delete(router.delUser)
		.post(router.addUser)
		.put(router.modifyUser)
};